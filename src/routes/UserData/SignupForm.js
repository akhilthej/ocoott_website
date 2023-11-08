import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState(""); // State to hold the feedback message

  function Submit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

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

  return (
    <div>
      <h1>Signup</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Phone Number" name="PhoneNumber" type="text" />
          <input placeholder="Password" name="Password" type="password" />
          <input className="text-white" type="submit" value="Submit" />
        </form>
        <p className="text-white">{message}</p> {/* Display the feedback message */}
      </div>
    </div>
  );
}
