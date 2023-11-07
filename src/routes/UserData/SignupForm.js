import React, { useState, useEffect } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  // Validation functions
  const isNameValid = (name) => name.length >= 5 && name.length <= 20;
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isPhoneValid = (phone) => /^\d{10}$/.test(phone);
  const isPasswordValid = (password) => password.length > 8;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!isNameValid(name) || !isEmailValid(email) || !isPhoneValid(phone) || !isPasswordValid(password)) {
      setErrorMessage('Please check the form fields for validation errors.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);

    const response = await fetch('https://script.google.com/macros/s/AKfycbxoIvHGrkTQSxbCuyQRLbNQoS30duvMMGCnzG6G5j0XTYTVOcJY8tYAhkQlBJMpR6gsjw/exec', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      if (data.result === 'success') {
        console.log('Data submitted successfully.');
        setIsSignupSuccess(true);
      } else {
        setErrorMessage(data.message);
      }
    } else {
      console.error('Failed to submit data.');
    }
  };

  // Use the useEffect hook to check for signup success and perform the redirection
  useEffect(() => {
    if (isSignupSuccess) {
      setErrorMessage('Signup Successful!');
      // Redirect to the "/login" page after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    }
  }, [isSignupSuccess]);

  return (
    <div>
      {errorMessage && <div className="text-green-500">{errorMessage}</div>}
      {isSignupSuccess && <div className="text-green-500">Signup Successful!</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-3 py-2 leading-tight border ${isNameValid(name) ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-blue-500`}
          />
          {!isNameValid(name) && <p className="text-red-500 text-xs">Name must be 5 to 20 characters.</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 leading-tight border ${isEmailValid(email) ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-blue-500`}
          />
          {!isEmailValid(email) && <p className="text-red-500 text-xs">Please enter a valid email address.</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-3 py-2 leading-tight border ${isPhoneValid(phone) ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-blue-500`}
          />
          {!isPhoneValid(phone) && <p className="text-red-500 text-xs">Please enter a 10-digit phone number with numbers only.</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 leading-tight border ${isPasswordValid(password) ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-blue-500`}
          />
          {!isPasswordValid(password) && <p className="text-red-500 text-xs">Password must be at least 8 characters long.</p>}
        </div>

        <button type="submit" className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
}



export { SignupForm };
