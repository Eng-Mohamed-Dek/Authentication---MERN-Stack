import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const user = localStorage.getItem('user')
 
const router = (
  <Router>
      <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
      <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/"/>} />
    </Routes>
  </Router>
)

function App() {
  return <div>
    { router }
  </div>
}

export default App