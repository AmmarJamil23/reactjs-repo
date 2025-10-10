import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

const ChildC = () => {
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: '100px',
      }}
    >
      <h1>Hello, {user.name}</h1>
      <h2>Current Theme: {theme}</h2>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ChildC;
