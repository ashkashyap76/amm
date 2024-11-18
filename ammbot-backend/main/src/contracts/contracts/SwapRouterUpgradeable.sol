// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

interface IERC20_EXT is IERC20 {
    function decimals() external view returns (uint256);
}

error CommonError(string);
event CommonEvent(string);
event TradedReserveUpdatedUser(
    address router,
    address token0,
    uint256 reserve0,
    address token1,
    uint256 reserve1
);

struct StructTradedPrice {
    uint256 token0Reserve;
    uint256 token1Reserve;
    uint256 timestamp;
}

contract SwapRouterUpgradeable is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable,
    ReentrancyGuardUpgradeable
{
    using SafeERC20 for IERC20_EXT;
    /// mapping params userAddress => uniswapRouterAddress => tokenInAddress => tokenOutAddress => StructTradedPrice[]
    mapping(address => mapping(address => mapping(address => mapping(address => StructTradedPrice[])))) userTradesWithPrice;
    address private _weth;

    receive() external payable {}

    event TokenSwapped(
        address indexed user,
        address indexed token,
        uint256 amountIn,
        uint256 amountOut,
        uint256 price
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address weth_) public initializer {
        __Pausable_init();
        __Ownable_init(msg.sender);
        __UUPSUpgradeable_init();
        __ReentrancyGuard_init();

        _weth = weth_;
    }

    function _updateUserTrade(
        address user_,
        address router_,
        address factory_,
        address tokenIn_,
        address tokenOut_,
        uint256 currentTime_
    ) private {
        (uint256 reserve0, uint256 reserve1) = _fetchReserves(
            factory_,
            tokenIn_,
            tokenOut_
        );

        userTradesWithPrice[user_][router_][tokenIn_][tokenOut_].push(
            StructTradedPrice(reserve0, reserve1, currentTime_)
        );

        userTradesWithPrice[user_][router_][tokenOut_][tokenIn_].push(
            StructTradedPrice(reserve1, reserve0, currentTime_)
        );

        emit TradedReserveUpdatedUser(
            router_,
            tokenIn_,
            reserve0,
            tokenOut_,
            reserve1
        );
    }

    function _swapTokensForTokensV2(
        address user_,
        IUniswapV2Router02 iRouterV2_,
        address tokenIn_,
        uint256 amountInTokens_,
        address tokenOut_,
        uint256 currentTime_
    ) private returns (uint256[] memory amounts) {
        if (tokenIn_ == address(0) || tokenOut_ == address(0))
            revert CommonError("Token in or out zero address.");

        if (iRouterV2_.WETH() == address(0))
            revert CommonError("Invalid router address");

        if (tokenIn_ == _weth)
            revert CommonError("Only use erc20 token as tokenIn_.");

        IERC20_EXT ierc20 = IERC20_EXT(tokenIn_);

        ierc20.safeTransferFrom(msg.sender, address(this), amountInTokens_);
        ierc20.approve(address(iRouterV2_), amountInTokens_);

        address[] memory path = new address[](2);
        path[0] = tokenIn_;
        path[1] = tokenOut_;

        amounts = iRouterV2_.swapExactTokensForTokens(
            amountInTokens_,
            0,
            path,
            user_,
            currentTime_ + 60
        );
    }

    function swapTokensForTokensV2(
        address user_,
        address router_,
        address tokenIn_,
        uint256 amountInTokens_,
        address tokenOut_
    ) external whenNotPaused nonReentrant returns (uint256[] memory amounts) {
        uint256 currentTime = block.timestamp;
        IUniswapV2Router02 uniswapV2Router = IUniswapV2Router02(router_);

        amounts = _swapTokensForTokensV2(
            user_,
            uniswapV2Router,
            tokenIn_,
            amountInTokens_,
            tokenOut_,
            currentTime
        );

        _updateUserTrade(
            user_,
            router_,
            uniswapV2Router.factory(),
            tokenIn_,
            tokenOut_,
            currentTime
        );
    }

    function _swapEthForTokensV2(
        address user_,
        IUniswapV2Router02 iRouterV2_,
        address weth_,
        address tokenOut_,
        uint256 currentTime_
    ) private returns (uint256[] memory amounts) {
        if (tokenOut_ == address(0))
            revert CommonError("Token in or out zero address.");

        uint256 msgValue = msg.value;

        if (msgValue == 0) revert CommonError("Eth value in zero");

        address[] memory path = new address[](2);
        path[0] = weth_;
        path[1] = tokenOut_;

        amounts = iRouterV2_.swapExactETHForTokens{value: msgValue}(
            0,
            path,
            user_,
            currentTime_ + 60
        );
    }

    function swapEthForTokensV2(
        address user_,
        address router_,
        address tokenOut_
    )
        external
        payable
        whenNotPaused
        nonReentrant
        returns (uint256[] memory amounts)
    {
        uint256 currentTime = block.timestamp;
        IUniswapV2Router02 uniswapV2Router = IUniswapV2Router02(router_);

        address weth = uniswapV2Router.WETH();

        if (weth == address(0)) revert CommonError("Invalid router address");

        amounts = _swapEthForTokensV2(
            user_,
            uniswapV2Router,
            weth,
            tokenOut_,
            currentTime
        );

        _updateUserTrade(
            user_,
            router_,
            uniswapV2Router.factory(),
            weth,
            tokenOut_,
            currentTime
        );
    }

    // function swapTokensV3(
    //     address uniswapV3Router_,
    //     address tokenIn_,
    //     uint256 amountIn_,
    //     address tokenOut_,
    //     uint24 fee_
    // ) external whenNotPaused nonReentrant {
    //     ISwapRouter iUniswapRouter = ISwapRouter(uniswapV3Router_);

    //     IERC20_EXT(tokenIn_).safeTransferFrom(
    //         msg.sender,
    //         address(this),
    //         amountIn_
    //     );

    //     IERC20_EXT(tokenIn_).approve(uniswapV3Router_, amountIn_);

    //     ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
    //         .ExactInputSingleParams({
    //             tokenIn: tokenIn_,
    //             tokenOut: tokenOut_,
    //             fee: fee_,
    //             recipient: msg.sender,
    //             deadline: block.timestamp + 60,
    //             amountIn: amountIn_,
    //             amountOutMinimum: 0,
    //             sqrtPriceLimitX96: 0
    //         });

    //     iUniswapRouter.exactInputSingle(params);

    //     uint256 amountOut = IERC20(tokenOut_).balanceOf(msg.sender);
    //     uint256 amountIn = amountIn_;

    //     emit TokenSwapped(
    //         msg.sender,
    //         tokenOut_,
    //         amountIn,
    //         amountOut,
    //         amountOut / amountIn
    //     );
    // }

    function getUserTrades(
        address user_,
        address router_,
        address tokenIn_,
        address tokenOut_
    )
        external
        view
        returns (
            StructTradedPrice[] memory tradedReserve,
            StructTradedPrice memory lastTradedReserve,
            bool isTraded
        )
    {
        tradedReserve = userTradesWithPrice[user_][router_][tokenIn_][
            tokenOut_
        ];

        isTraded = tradedReserve.length > 0 ? true : false;

        if (isTraded) {
            lastTradedReserve = tradedReserve[tradedReserve.length - 1];
        }
    }

    function _fetchReserves(
        address factory_,
        address tokenIn_,
        address tokenOut_
    ) private view returns (uint256 reserveIn, uint256 reserveOut) {
        // Get the pair address from the factory
        address pair = IUniswapV2Factory(factory_).getPair(tokenIn_, tokenOut_);

        if (pair == address(0)) revert CommonError("Pair does not exist");

        // Fetch reserves from the pair
        (uint256 reserve0, uint256 reserve1, ) = IUniswapV2Pair(pair)
            .getReserves();

        if (reserve0 == 0 && reserve1 == 0)
            revert CommonError("Reserves cannot be zero");

        // Ensure that the token order in the pair matches the order in which you are fetching the reserves
        address token0 = IUniswapV2Pair(pair).token0();

        uint256 decimals_0 = IERC20_EXT(tokenIn_).decimals();
        uint256 decimals_1 = IERC20_EXT(tokenOut_).decimals();

        if (tokenIn_ == token0) {
            reserveIn = (reserve0 * 1e18) / 10 ** decimals_0;
            reserveOut = (reserve1 * 1e18) / 10 ** decimals_1;
        } else {
            reserveIn = (reserve1 * 1e18) / 10 ** decimals_0;
            reserveOut = (reserve0 * 1e18) / 10 ** decimals_1;
        }
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
