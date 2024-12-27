import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Chart from "react-apexcharts";
import Cal from './Cal';
import Reminder from './Reminder';
import notificationSound from '../images/notify.mp3';
import Nutrition from './Nutrition';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../pages/Search/Search';
import Cart from '../../pages/Cart/Cart';
import PlaceOrder from '../../pages/PlaceOrder/PlaceOrder';
import Footer from '../Footer/Footer';

import BMICalculator from './BMICalculator';
import Macro from './Macro';
import Cards from './Cards';

const Dashboard = () => {
    const [category, setCategory] = useState("All");
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

    return (
        <div>
             <Navbar/>
           
            {/*end of the section*/}
            <section className='py-5 header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='m-2 py-5' style={{position:'relative',top:'220px'}}>
                                <h2 className='text-white'>Welcome</h2>
                                <ul className='list-inline d-flex mb-0'>
                                    <li style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }} onClick={handleLogOut}>
                                        {first_name} {last_name}
                                    </li>
                                </ul>
                                <p className='text-white lead'>By bridging the gap between consumers and suppliers of non-vegetarian products, these apps contribute to the digitalization of the food industry while satisfying the cravings of meat lovers with a diverse range of culinary options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='my-2'>
                                <h3 className='text-dark text-center'>
                                    Menu
                                </h3>
                                <p className='text-dark text-center'>
                                By bridging the gap between consumers and suppliers of non-vegetarian products, these apps contribute to the digitalization of the food industry while satisfying the cravings of meat lovers with a diverse range of culinary options.
                                </p>
                               
                              
                                <Cards/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='pt-5'>
                <div className='container'>
                    <div className='row justify-content-evenly'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                           <h3 className='text-dark text-center'>
                            Select Your Weight Category so that we can suggest Diet and Activity Plan..!
                           </h3>
                            
                        </div>
                     
                    </div>
                </div>
            </section>
           
            <Nutrition/> */}
         
         
        </div>
    );
}

export default Dashboard;
