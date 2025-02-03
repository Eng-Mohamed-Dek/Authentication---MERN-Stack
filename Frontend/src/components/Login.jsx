import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import axios from 'axios'

const Login = () => {
  // state to get data from the inputs 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  // navigate config 
  const navigate = useNavigate()

  // submitting data 
  const handleLogin = async (e) => {
    e.preventDefault()


    //validate password
    if (!password) {
      setError("Please enter a password")
      return;
    }

    // then clear the error after validation
    setError("")


    //Login API Call
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      })

      // handle login successfull 
        localStorage.setItem('user', email)
        navigate('/')
    } catch (err) {
      // handle login error 
      setError("Unexpected error happened")
    }
  }


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
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
            <button className="btn">Login</button>
          </form>

          {/* show an error if exists  */}
          {error && (<p className="text-red-500 text-xs pb-1">{error}</p>)}
          <p className="text-sm text-center mt-4"> Not Registered yet? <Link to="/signup" className="font-medium text-primary underline"> Create an Account </Link> </p>
        </div>
      </div>
    </>
  )
}

export default Login
