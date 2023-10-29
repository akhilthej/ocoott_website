import React from 'react';

function UnderMaintenance() {
  return (
    <div className="z-100 bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Maintenance</h1>
        <p className="text-lg text-gray-600 mb-4">We're sorry, but this page is currently under maintenance. Please check back later.</p>
        <p className="text-sm text-gray-600">Thank you for your patience.</p>
      </div>
    </div>
  );
}

export default UnderMaintenance;
