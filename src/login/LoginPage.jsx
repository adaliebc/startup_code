import React, { useState } from 'react';


const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = async () => {
    await loginOrCreate('/api/auth/login');
  };

  const createUser = async () => {
    await loginOrCreate('/api/auth/create');
  };

  const loginOrCreate = async (endpoint) => {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = '/'; // Redirect to home page
    } else {
      const body = await response.json();
      setError(`⚠ Error: ${body.msg}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form>
        <div className="form-group">
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            id="userPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={loginUser}>
          Login
        </button>
        <button type="button" onClick={createUser}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
