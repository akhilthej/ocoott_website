import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValid(emailRegex.test(value));
  };

  const handleSuccessfulLogin = (name) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);

    if (!isValid) {
      setMessage('Please enter a valid email address');
      return;
    }

    const queryParams = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    fetch(
      `https://script.google.com/macros/s/AKfycbxPXF6L8aKpbIZb0c7mBwk6XYTYnRWalbBfmFfiXTiaaxwKKoDWeJVu0XqM4ZxmsOE5BA/exec?${queryParams}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.text())
      .then((data) => {
        if (data.startsWith('Welcome')) {
          const name = data.replace('Welcome', '').trim();
          setIsLoggedIn(true);
          setUserName(name);
          handleSuccessfulLogin(name);
        }
        setMessage(data);
      })
      .catch((error) => {
        setMessage('An error occurred');
        console.error(error);
      });
  };

  useEffect(() => {
    // Check for login status in local storage
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');

    if (storedLoginStatus === 'true' && storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isLoggedIn ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome, {userName}</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => validateEmail(e.target.value)}
                  className={`w-full px-3 py-2 border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-blue-500`}
                />
                {!isValid && <p className="text-red-500 text-xs">Please enter a valid email address.</p>}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus-border-blue-500"
                />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </form>
            <p className='text-black text-sm pt-2'>Create new account <a href='/register'><a className='text-blue-500'>Signup</a></a></p>
            <p className={`mt-4 text-sm ${message.startsWith('An error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Login;
