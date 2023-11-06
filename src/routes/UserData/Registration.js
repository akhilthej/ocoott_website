import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  function isValidPhone(phone) {
    return /^\d{10}$/.test(phone);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setMessage("Invalid email format");
    } else {
      setMessage("");
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setMessage("Password must be 8 or more characters");
    } else {
      setMessage("");
    }
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
    if (!isValidPhone(e.target.value)) {
      setMessage("Phone number must contain only numbers and 10 digits");
    } else {
      setMessage("");
    }
  }

  function Submit(e) {
    e.preventDefault();
    setMessage(""); // Clear previous error messages

    if (!isValidEmail(email)) {
      setMessage("Invalid email format");
      return;
    }

    if (!isValidPassword(password)) {
      setMessage("Password must be 8 or more characters");
      return;
    }

    if (!isValidPhone(phone)) {
      setMessage("Phone number must contain only numbers and 10 digits");
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    formDatab.append("email", email);
    formDatab.append("phone", phone);
    formDatab.append("password", password);

    fetch(
      "https://script.google.com/macros/s/AKfycbxGng_P2DPAhRTTVCP634MWfzKz6w2JaalGdpE4ignEtKS4Bs0rElseVDhGcEm_ztu2/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.text();
        } else {
          throw new Error(`Received status code ${res.status}`);
        }
      })
      .then((data) => {
        setMessage(data);
        if (data.includes("successfully Registered")) {
          navigate("/login");
        }
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
        console.log(error);
      });
  }

  return (
    <div className="RegistrationForm min-h-screen flex items-center justify-center -mt-14 bg-cover bg-center" style={{ backgroundImage: 'url("your-background-image-url.jpg")' }}>
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input
            className="w-full p-2 mb-4 border rounded-md"
            placeholder="Email"
            name="Email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="w-full p-2 mb-4 border rounded-md"
            placeholder="Phone Number"
            name="Phone"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            className="w-full p-2 mb-4 border rounded-md"
            placeholder="Password"
            name="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-md" type="submit">
            Register
          </button>
        </form>
        <p className="text-red-500 mt-2">{message}</p>
      </div>
    </div>
  );
}
