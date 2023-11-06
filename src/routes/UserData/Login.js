import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  // Load saved login details from local storage when the component mounts
  useEffect(() => {
    const savedEmailOrPhone = localStorage.getItem("emailOrPhone");
    const savedPassword = localStorage.getItem("password");

    if (savedEmailOrPhone && savedPassword) {
      setEmailOrPhone(savedEmailOrPhone);
      setPassword(savedPassword);
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    const formDatab = new FormData();
    formDatab.append("Email", emailOrPhone);
    formDatab.append("Password", password);

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
        if (data.includes("Welcome")) {
          setRegistered(true);

          // Save login details to local storage
          localStorage.setItem("emailOrPhone", emailOrPhone);
          localStorage.setItem("password", password);

          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
        console.log(error);
      });
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center -mt-14"
      style={{
        backgroundImage: 'url("your-background-image-url")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="Login bg-white p-8 rounded-md shadow-md">
        {registered ? (
          <p className="text-2xl font-semibold mb-4">{message}</p>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form className="form" onSubmit={handleLogin}>
              <input
                className="w-full p-2 mb-4 border rounded-md"
                placeholder="Email or Phone"
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <input
                className="w-full p-2 mb-4 border rounded-md"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 text-white p-2 rounded-md"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="text-red-500 mt-2">{message}</p>
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Signup <span className="text-black">now</span>
          </Link>
          </>
          
        )}
      
      </div>
    </section>
  );
}
