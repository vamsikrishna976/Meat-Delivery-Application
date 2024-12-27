import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const first_name = useSelector(state => state.first_name)
    const last_name = useSelector(state => state.last_name)

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
        dispatch({ type: "ISlOGGEDOUT", });
    }
    if (isLoggedIn) {
        return (
            <Fragment>
                <div className='headers fixed-top'>
                    <div>
                       
                    </div>
                    <div>
                      
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container">
                        <div>
                            <div>
                            <h3 style={{color:'black'}} className=' text-black'><Link to="/">Online Food App</Link></h3>
                            </div>
                            <div>
                                <div className='header_right_cont'>

                                </div>
                            </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className='list-inline ms-auto d-flex mb-0'>
                                <li>
                                    <NavLink style={{color:'black'}} to="/login" className={({ isActive }) =>
                                        isActive ? "lactive-class" : "not-active-class"}>
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink style={{color:'black'}}  to="/sign-up" className={({ isActive }) =>
                                        isActive ? "lactive-class" : "not-active-class"}>
                                        Sign up
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </Fragment>
        )

    }
}

export default Header