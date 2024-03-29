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

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      //props.onLogin(userName);
    } else {
      const body = await response.json();
      setError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <div>
      <div className="banner">
        <h1 className="site-title">Fiber Art Faerie</h1>
        <div className="menu" id="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
      </div>

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
    </div>
  );
};

export default LoginPage;
