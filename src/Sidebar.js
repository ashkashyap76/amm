// src/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>AMM Bot</h2>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/add-token" style={styles.link}>Add Token</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/add-wallet" style={styles.link}>Add Wallet</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/change-password" style={styles.link}>Change Password</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/" style={styles.link}>Logout</Link>
          </li>
        </ul>
      </div>
    );
  };

const styles = {
  sidebar: {
    height: '100vh',
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
  },
  logo: {
    marginBottom: '20px',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  menuItem: {
    margin: '15px 0',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  },
};

export default Sidebar;
