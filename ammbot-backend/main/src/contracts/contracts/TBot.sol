// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TBot is ERC20 {
    constructor() ERC20("tBot", "tBot") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}
