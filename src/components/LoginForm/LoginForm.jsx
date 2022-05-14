import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // hooks

  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  // const postData = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}api-token-auth/`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );
  //   return response.json();
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     postData().then((response) => {
  //       window.localStorage.setItem("token", response.token);
  //       navigate("/");
  //     });
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api-token-auth/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await response.json();
        console.log(data)
        window.localStorage.setItem("token", data.token);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      <div>
      <h3>New here?</h3>
      <p>Sign up now <span role="img" aria-label="Pointing Down"></span></p>
      <button><Link to="/users/register/">Create Account</Link></button>
    </div>
      
    </form>
  );
}

export default LoginForm;