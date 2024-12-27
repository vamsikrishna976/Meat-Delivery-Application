import React from 'react'
import aboutImg from '../images/about.png';


const Home = () => {
    return (
        <div>
            
            <section class="home-bg">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="m-2 text-content py-5 text-center" style={{position:'relative',top:'150px'}}>
                        <h5 className='text-white '>Feast at Your Fingertips</h5>
                        <h2 class="text-white primary-heading aos-init aos-animate" data-aos="fade-up" style={{fontSize:'3rem'}}>Discover Delightful Dining with Our Online Food Delivery App</h2>
                        <p class="text-white aos-init aos-animate" data-aos="fade-up">
                            At Doctean hospital, we believe that healthcare should be more than just a service.<br/>It
                            should be a compassionate and collaborative journey towards wellness.
                        </p>
                        <div class="d-flex justify-content-center">
                            <div>
                                <a href="/sign-up" data-aos="fade-up" class="btn btn-outline-light rounded-pill px-3 py-2 aos-init aos-animate">Registe
                                    Now</a>
                            </div>
                            <div class="mx-2">
                                <a href="/login" data-aos="fade-up" class="btn btn-outline-light rounded-pill px-3 py-2 aos-init aos-animate">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
           
           
         

        </div>
    )
}


export default Home;