import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { _post } from '../services';
import RectangleImage from '../components/images/Rectangle.png';
import womenCard from '../components/images/tt.png';


const SignUp = () => {
    const navigate = useNavigate();
    const dataFields = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    }
    const [data, setData] = useState(dataFields)
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        const { password, confirm_password } = data;
        if (password === confirm_password) {
            _post("register", data)
                .then(data => {
                    if (data.status) {
                        alert(data.message)
                        navigate("/login")
                        setErrorMsg("")
                        setData(dataFields)
                    }
                    if (data.status === false) {
                        alert(data.message)
                    }

                })
                .catch(error => {
                    alert("Error: ", error.response.data.message)
                })
        } else {
            setErrorMsg("Password Should match")
        }
    }
    return (
       
       <div>
      
         <section className=" loginBg py-5">
        <div className="container-fluid" >
          <div className="row align-items-center" >
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h4 className='text-start text-white pt-2 text-center'>Start your journey with us!<br></br>Fill out the form and let's explore your Fitness Goles  together!</h4>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
             <div className="p-5 text-center ">
             <Fragment>
            <div className='registration p-5'>
                <div className='registration_content'>
                    <div className='text-start pb-2'>
                        <h4 className='text-white'>Register to Login ! </h4>
                    </div>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-2  text-start" >
                            <div className=' my-2'>
                                
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder="First Name"
                                    name='first_name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className=' my-2'>
                               
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder="Last Name"
                                    name='last_name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="my-2 text-start">
                           
                            <input
                                type="email"
                                className="form-control rounded-pill"
                                placeholder="E mail"
                                name='email'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-2 text-start">
                            
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                placeholder="Password"
                                name='password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="my-2 text-start">
                            
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                placeholder="Confirm Password"
                                name='confirm_password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            {errorMsg && <p className='mb-0' style={{ fontSize: "12px", color: "red" }}>{errorMsg}</p>}
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-light mt-3 w-100 rounded-pill px-5 py-2'> Register</button>
                        </div>
                        <p className='text-white mt-3'>Already have an   account <a href='/login' className='text-white fw-bold'>Click here</a> to Login</p>
                        <p className='text-white mt-3'>
                            Visit Our  pages
                        </p>
                        <div className='d-flex justify-content-center'>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 fa-facebook" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 fa-twitter" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className='px-2'>
                                <a href=''>
                                    <i class="fa fs-4 fa-youtube" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
             </div>
            </div>
            {/*end of the first col*/}
           
      
      
            </div>
          </div>
        
      </section>
       </div>
    )
}

export default SignUp