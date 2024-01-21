import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
const Nav = () => {
  const auth = localStorage.getItem("users");
  const navigate = useNavigate();
  const logoutbutton = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div> 
      <ul className="bg-sky-700 m-0  p-5">
      
        <li>
         
          <Link to="/" className=" p-5   text-white">
            products
          </Link>
        </li>
        <li>
          
          <Link to="/add" className=" p-5   text-white">
            add
          </Link>
        </li>
        <li>
          <Link to="/update" className=" p-5   text-white">
            update
          </Link>
        </li>
        <li>
          <Link to="/profile" className=" p-5   text-white">
            profile
          </Link>
        </li>
        <li>
          <Link to="/login" className=" p-5   text-white">
            login
          </Link>
        </li>
        <li>
          {auth ? (
            <Link
              to="/logout"
              onClick={logoutbutton}
              className=" p-5   text-white"
            >
              logout
            </Link>
          ) : (<>
            <Link to="/signup" className=" p-5   text-white">
              sign up
            </Link>
            <Link to="/login" className=" p-5   text-white">
              log in
            </Link></> 
          )}  
        </li>
        
      </ul>
    </div>
  );
};

export default Nav;
