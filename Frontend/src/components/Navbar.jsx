import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
const Navbar = ({ }) => {
  // navigate config
  const navigate = useNavigate();

  const Logout = () => {
    // Add your logout logic here
    localStorage.clear();
    navigate("/login");
  };
  
  // user check 
  const user = localStorage.getItem('user')

  return (
    <>
      <ToastContainer />
      <div className="bg-white flex justify-around items-center sm:px-20 px-4 py-2">
        <h2 className="sm:text-3xl text-1xl font-medium text-black py-2 cursor-pointer">
          <NavLink to="/">Authentication App</NavLink>
        </h2>
        <ul className="lg:flex gap-10 px-4 text-[16px] hidden">
          <li>
          {!user &&
            <NavLink to="/">Home</NavLink>
          }
          </li>
          {!user &&
          <>
          <li>
            <NavLink to="/signup" className="btn py-2">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="btn bg-transparent border border-primary text-primary color py-2">Login</NavLink>
          </li>
          </> 
          }
        </ul>
        <div>
            {user &&
            <button onClick={() => Logout()} className="btn py-2 bg-gray-500">Logout</button>
            }
        </div>
      </div>
    </>
  );
};

export default Navbar;
