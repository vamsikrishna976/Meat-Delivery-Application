  import React, { useContext, useState } from "react";
  import "./Navbar.css";
  import { assets } from "../../assets/assets";
  import { Link } from "react-router-dom";
  import { StoreContext } from "../../context/StoreContext";
  import  { useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';

  const Navbar = ({ setShowLogin }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const first_name = useSelector(state => state.first_name);
    const last_name = useSelector(state => state.last_name);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [menu, setMenu] = useState("home");

    /* scroll to top function */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const handleLogOut = () => {
      sessionStorage.clear();
      navigate("/");
      dispatch({ type: "ISlOGGEDOUT" });
  };

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
      <div className="navbar">
        <Link to="/dashboard">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
       
        <div className="navbar-right">
          
          <Link to="/search">
           
          </Link>
          <div className="navbar-search-icon">
            <Link to="/cart">
            
            </Link>
            
            
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
           
          </div>
          <ul className='list-inline d-flex mb-0'>
                                      <li className="bg-warning p-2" style={{ color: 'black', fontWeight: 'bold' }} onClick={handleLogOut}>
                                          {first_name} {last_name}
                                      </li>
                                      </ul>
        </div>
      </div>
    );
  };

  export default Navbar;
