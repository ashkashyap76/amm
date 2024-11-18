// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'ammbot',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Login Route
app.post('/login', (req, res) => {
    const { mailid, password } = req.body;

    const query = 'SELECT * FROM admin WHERE mailid = ? AND password = ?';
    db.query(query, [mailid, password], (err, results) => {
        if (err) {
            res.status(500).send('Server error');
        } else if (results.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// Add token
app.post('/add-wallet', (req, res) => {
    const { walletAddress, privateKey } = req.body;

    if (!walletAddress || !privateKey) {
        return res.status(400).send('Wallet address and private key are required.');
    }

    const query = 'INSERT INTO wallets (wallet_address, private_key) VALUES (?, ?)';
    db.query(query, [walletAddress, privateKey], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Database error');
        }
        res.status(200).send('Wallet added successfully');
    });
});

// Add this in server.js
app.post('/add-token', (req, res) => {
    const { tokenName, symbol, contractAddress } = req.body;

    if (!tokenName || !symbol || !contractAddress) {
        return res.status(400).send('All fields are required.');
    }

    const query = 'INSERT INTO tokens (token_name, symbol, contract_address) VALUES (?, ?, ?)';
    db.query(query, [tokenName, symbol, contractAddress], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Database error');
        }
        res.status(200).send('Token added successfully');
    });
});

app.post('/change-password', (req, res) => {
    const { email, currentPassword, newPassword } = req.body;

    if (!email || !currentPassword || !newPassword) {
        return res.status(400).send('All fields are required.');
    }

    const query = 'SELECT * FROM admin WHERE mailid = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database error');
        }

        if (results.length === 0) {
            return res.status(404).send('Admin not found.');
        }

        const admin = results[0];
        if (admin.password !== currentPassword) {
            return res.status(401).send('Current password is incorrect.');
        }

        const updateQuery = 'UPDATE admin SET password = ? WHERE mailid = ?';
        db.query(updateQuery, [newPassword, email], (updateErr) => {
            if (updateErr) {
                console.error('Error updating password:', updateErr);
                return res.status(500).send('Database error');
            }
            res.status(200).send('Password updated successfully.');
        });
    });
});

let botProcess = null;

app.post('/start-bot', (req, res) => {
    if (botProcess) {
      return res.status(400).send('Bot is already running');
    }
  
    console.log("Starting bot...");
  
    const command = `npx ts-node main/src/ethers/ammBotEthersWithTime.ts`;
    botProcess = exec(command, { env: { ...process.env } });
  
    console.log(`Bot started with PID: ${botProcess.pid}`);
  
    botProcess.stdout.on('data', (data) => {
      console.log(`Bot stdout: ${data}`);
    });
  
    botProcess.stderr.on('data', (data) => {
      console.error(`Bot stderr: ${data}`);
    });
  
    botProcess.on('close', (code) => {
      console.log(`Bot process exited with code ${code}`);
      botProcess = null;
    });
  
    res.status(200).send('Bot started successfully');
  });
  

  const psTree = require('ps-tree');

  app.post('/stop-bot', (req, res) => {
    if (!botProcess) {
      return res.status(400).send('Bot is not running');
    }
  
    console.log(`Stopping bot with PID: ${botProcess.pid}`);
  
    psTree(botProcess.pid, (err, children) => {
      if (err) {
        console.error('Error fetching child processes:', err);
        return res.status(500).send('Failed to stop bot');
      }
  
      // Kill all child processes
      children.forEach(child => {
        try {
          console.log(`Killing child process ${child.PID}`);
          process.kill(child.PID, 'SIGKILL');
        } catch (err) {
          console.error(`Failed to kill child process ${child.PID}:`, err);
        }
      });
  
      // Kill the main process
      botProcess.kill('SIGKILL');
      botProcess = null;
      console.log('Bot process and all subprocesses stopped');
      res.status(200).send('Bot stopped successfully');
    });
  });
    
app.get('/bot-status', (req, res) => {
  if (botProcess) {
    return res.status(200).send('Bot is running');
  } else {
    return res.status(200).send('Bot is stopped');
  }
});

// Start Server
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
