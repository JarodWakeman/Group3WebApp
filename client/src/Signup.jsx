import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Components/Signup.css'

const Signup = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/signup', { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  // Function to handle form submission
  const handleSignup = () => {
    // Perform your registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <body>
    <section>
    <div className='Register'>
    <div className='content'>
      <h2>Sign Up</h2>
      <div className='form'>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className='inputBox'>
        <label htmlFor="name"><i>Name:</i></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
</div>
        {/* Email Field */}
        <div className='inputBox'>
        <label htmlFor="email"><i>Email:</i></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
</div>
        {/* Password Field */}
        <div className='inputBox'>
        <label htmlFor="password"><i>Password:</i></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
</div>
        {/* Register Button */}
        <div className='inputBoxsubmit'>
        <button type="button" onClick={handleSignup}>
          Register
        </button>
        </div>
        {/* Login Button */}
        <div className='links'>
        <Link to="/login">
          <button type="button">Go to Login</button>
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

export default Signup;
