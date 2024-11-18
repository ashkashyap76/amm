// src/Dashboard.js

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

const Dashboard = () => {
  const [botStatus, setBotStatus] = useState('Stopped');
  const [message, setMessage] = useState('');

  const handleStartBot = async () => {
    try {
      const response = await axios.post('http://localhost:3001/start-bot');
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data : 'Server error');
    }
  };
  
  const handleStopBot = async () => {
    try {
      const response = await axios.post('http://localhost:3001/stop-bot');
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data : 'Server error');
    }
  };
  
  const checkBotStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bot-status');
      setMessage(response.data);
    } catch (error) {
      setMessage('Failed to fetch bot status');
    }
  };
  

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <h1>Dashboard</h1>
        <h3>Bot Status: {botStatus}</h3>
        <button onClick={handleStartBot} style={styles.button}>Start Bot</button>
        <button onClick={handleStopBot} style={styles.button}>Stop Bot</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    marginLeft: '250px',
    padding: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Dashboard;
