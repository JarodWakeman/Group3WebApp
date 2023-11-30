// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Components/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <body>
      <section>
    <div className='signin'>
      <div className='content'>
      <h2>Login</h2>
      <div className='form'>
        
      <form>
        <div className='inputBox'>
        {/* Email Field */}
        <label htmlFor="email"><i>Email:</i></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='inputBox'>
        {/* Password Field */}
        <label htmlFor="password"><i>Password:</i></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        </div>
        <div className='inputBoxsubmit'>
        {/* Login Button */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        
        </div>
        <div className='links'>
        {/* Register Button */}
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        </div>
      </form>
      </div>
      </div>
    </div>
    </section>
    </body>
  );
};

export default Login;