import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";

const Header = () => {
  const { err } = useSelector((state) => state.Books);
  const {islogIn}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  return (
    <>
      {err && (
        <div className="alert alert-danger" role="alert">
         {err} Data !!!
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button className="btn btn-outline-primary" type="submit" onClick={()=>dispatch(logInOut())}>
          {islogIn?"Log Out":"Log In"}
        </button>
      </nav>
    </>
  );
};

export default Header;
