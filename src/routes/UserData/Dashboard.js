import React, { useState } from 'react';

const Dashboard = () => {
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated information to the server or Google Sheets
    // You may use fetch() or an HTTP library to make the API request
  };

  return (
    <div>
      <h2>Update Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Phone Number:</label>
          <input
            type="text"
            value={newPhoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <label>New Email:</label>
          <input
            type="text"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
