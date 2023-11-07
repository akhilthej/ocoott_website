import React, { useState } from 'react';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('https://script.google.com/macros/s/AKfycbxoIvHGrkTQSxbCuyQRLbNQoS30duvMMGCnzG6G5j0XTYTVOcJY8tYAhkQlBJMpR6gsjw/exec', {
      method: 'POST',
      body: JSON.stringify({ emailOrPhone, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.result === 'success') {
        // Successfully logged in
        setIsLoggedIn(true);
      } else {
        setErrorMessage(data.message);
      }
    } else {
      console.error('Failed to log in.');
    }
  };

  return (
    <div>
      {isLoggedIn && <div className="text-green-500">Welcome, User!</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <form onSubmit={handleLogin} className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
        {/* Email/Phone input */}
        <div className="mb-4">
          <label htmlFor="emailOrPhone" className="block text-gray-700 text-sm font-bold mb-2">
            Email or Phone:
          </label>
          <input
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus-border-blue-500"
          />
        </div>
        {/* Password input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus-border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
