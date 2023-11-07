import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to Google Apps Script
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzMnxx68Djj4NbOYciEnRsXJE_-xMtIVKHiIV1eDbTP8vA9PCRJLNWEEvPktY4toZq29g/exec',
      {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      }
    );

    const result = await response.text();

    if (response.ok && result === 'Success') {
      alert('Signup successful!');
    } else if (result === 'Email already exists') {
      alert('Email already exists. Please use a different email.');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Signup Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
