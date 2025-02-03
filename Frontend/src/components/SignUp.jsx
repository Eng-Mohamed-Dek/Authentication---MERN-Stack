import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from 'axios'

const SignUp = () => {
  // state to get data from the inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // navigate config
  const navigate = useNavigate();

  // submitting data
  const handleSignUp = async (e) => {
    e.preventDefault();

    //validate name input
    if (!name) {
      setError("Please enter your name");
      return;
    }

    //validate password
    if (!password) {
      setError("Please enter a password");
      return;
    }

    // then clear the error after validation
    setError("");

    //SignUp API Call
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name: name,
        email: email,
        password: password,
      });

      // handle login successfull
      if (response.data) {
        setError(response.data.message);
        return;
      }

      localStorage.setItem('user', email)
      navigate('/')

    } catch (err) {
      // handle login error
      setError(err.message);
    }

    // redirect to login page after successful sign up
    // history.push("/login")
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              name="fullName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="input-box"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="input-box"
              name="email"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your password"
              className="input-box"
              name="password"
            />
            <button className="btn" type="submit">
              SignUp
            </button>
          </form>

          {/* show an error if exists  */}
          {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
          <p className="text-sm text-center mt-4"> Already have an account <Link to="/login" className="font-medium text-primary underline"> Login </Link> </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
