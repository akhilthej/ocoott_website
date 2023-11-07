import React, { useState } from 'react';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  // Function to verify login
  const handleLogin = async (e) => {
    e.preventDefault();

    // You should replace these hard-coded values with actual verification logic.
    const emailOrPhoneToVerify = 'user@example.com'; // Replace with the correct email or phone from the Google Sheets
    const passwordToVerify = 'password'; // Replace with the correct password from the Google Sheets

    if (emailOrPhone === emailOrPhoneToVerify && password === passwordToVerify) {
      setLoginSuccess(true);
      setLoginErrorMessage('');
    } else {
      setLoginSuccess(false);
      setLoginErrorMessage('Invalid email/phone or password');
    }
  };

  return (
    <div>
      {loginSuccess && <div className="text-green-500">Welcome, User!</div>}
      {loginErrorMessage && <div className="text-red-500">{loginErrorMessage}</div>}
      <form onSubmit={handleLogin} className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="emailOrPhone" className="block text-gray-700 text-sm font-bold mb-2">Email/Phone:</label>
          <input
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
