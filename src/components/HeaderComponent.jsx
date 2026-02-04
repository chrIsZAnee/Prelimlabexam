import React from 'react';
import { useAuth } from '../context/AuthContext';

const HeaderComponent = ({ title }) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="app-header">
      <div className="header-left">
        <img src="/vite.svg" alt="SchoolUs Logo" className="header-logo" />
        <h1 className="header-title">{title}</h1>
      </div>
      {isLoggedIn && (
        <div className="header-right">
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
