import React, { useState, useEffect } from "react";
import singupposter from '../../assets/coverimages/signupposter.webp'

export default function App() {
  const [message, setMessage] = useState(""); // State to hold the feedback message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (message.startsWith("Email or phone number already exists")) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [message]);

  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Real-time validation
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setIsPhoneNumberValid(false);
      return;
    } else {
      setIsPhoneNumberValid(true);
    }

    const formDatab = new FormData();
    formDatab.append("Name", name);
    formDatab.append("Email", email);
    formDatab.append("PhoneNumber", phoneNumber);
    formDatab.append("Password", password);

    fetch("https://script.google.com/macros/s/AKfycbxPXF6L8aKpbIZb0c7mBwk6XYTYnRWalbBfmFfiXTiaaxwKKoDWeJVu0XqM4ZxmsOE5BA/exec", {
      method: "POST",
      body: formDatab
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error(`Received status code ${res.status}`);
        }
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
        console.log(error);
      });
  }

  function validateEmail(value) {
    // Implement your email validation logic here
    // Return true if valid, false otherwise
    return true;
  }

  function validatePhoneNumber(value) {
    // Implement your phone number validation logic here
    // Return true if valid, false otherwise
    return true;
  }

  return (
    <div className="flex items-center justify-center min-h-screen"lassName="flex items-center justify-center min-h-screen"
    style={{
      backgroundImage: `url(${singupposter})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <form className="form space-y-2" onSubmit={(e) => Submit(e)}>
          <input
            type="text"
            placeholder="Your Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus-border-orange-500"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => setIsEmailValid(validateEmail(e.target.value))}
            className={`w-full px-3 py-2 border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-orange-500`}
          />
          {!isEmailValid && <p className="text-red-500 text-xs">Please enter a valid email address.</p>}
          <input
            type="text"
            placeholder="Phone Number"
            name="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={(e) => setIsPhoneNumberValid(validatePhoneNumber(e.target.value))}
            className={`w-full px-3 py-2 border ${isPhoneNumberValid ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus-border-orange-500`}
          />
          {!isPhoneNumberValid && <p className="text-red-500 text-xs">Please enter a valid phone number.</p>}
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus-border-orange-500"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </form>
        <p className='text-black text-sm pt-2'>Are you an exesting user? <a href='/login'><a className='text-orange-500'>Login</a></a></p>
        <p className={`mt-4 text-sm ${isValid ? 'text-green-500' : 'text-red-500'}`}>{message}</p>
      </div>
    </div>
  );
}
