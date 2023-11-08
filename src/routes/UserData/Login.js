import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [userName, setUserName] = useState(''); // State to store the user's name

  const validateEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValid(emailRegex.test(value));
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
          setIsLoggedIn(true); // Set login status to true
          setUserName(data.replace('Welcome', '').trim()); // Extract and set the user's name
        }
        setMessage(data);
      })
      .catch((error) => {
        setMessage('An error occurred');
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isLoggedIn ? ( // Conditional rendering based on login status
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome, {userName}</h1>
            {/* Place your content to show after a successful login here */}
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
              <button type="submit" className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </form>
            <p className={`mt-4 text-sm ${message.startsWith('An error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
