import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'; // Add this line
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Places = () => {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const first_name = useSelector(state => state.first_name);
    const last_name = useSelector(state => state.last_name);

  

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
        dispatch({ type: "ISlOGGEDOUT" });
    };
    return(
        <div>
<section className='py-5 hero-bg'>
<div className='container'>
    <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
            <div className='m-2 py-5'>
                <h2 className='text-white'>Welcome</h2>
                <ul className='list-inline d-flex mb-0'>
                    <li style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }} onClick={handleLogOut}>
                        {first_name} {last_name}
                    </li>
                </ul>
                <p className='text-white lead'>Find exclusive Genius rewards in every corner of the world!</p>
            </div>
        </div>
    </div>
</div>
</section>
</div>
    )
}
export default Places;