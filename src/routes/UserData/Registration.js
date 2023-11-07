import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);

    const response = await fetch('https://script.google.com/macros/s/AKfycbxYcWO_MyXwZwSQdWN9TvSZZqYmHEs97PxHdRRViOSBXUBSmA5G4i_GVbBgbZ2rpqigGA/exec', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Data submitted successfully.');
      // You can add further actions or state updates here.
    } else {
      console.error('Failed to submit data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} class="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        class="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        class="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  
    <div class="mb-6">
      <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        class="w-full px-3 py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Submit
    </button>
  </form>
  
  );
}

export default SignupForm;
