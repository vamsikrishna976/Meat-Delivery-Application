import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Chart from "react-apexcharts";

const BMICalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('pounds'); // Default weight unit
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [bmi, setBMI] = useState(null); // State to store BMI value

    const dispatch = useDispatch();

    useEffect(() => {
        // Calculate BMI whenever weight or height changes
        if (weight && heightFeet && heightInches) {
            const bmiValue = calculateBMI();
            setBMI(bmiValue);
        }
    }, [weight, weightUnit, heightFeet, heightInches]);

    const calculateBMI = () => {
        // Convert height to inches
        const heightInInches = (parseInt(heightFeet) * 12) + parseInt(heightInches);

        // Convert weight to pounds if it's in kilograms
        let weightInPounds = parseFloat(weight);
        if (weightUnit === 'kg') {
            weightInPounds *= 2.20462; // 1 kg = 2.20462 pounds
        }

        // Calculate BMI
        const bmiValue = (weightInPounds / (heightInInches * heightInInches)) * 703;
        return bmiValue;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Add logic to handle input changes here
    };

    return (
       <div>
        <section className='py-5 bg-primary' id='bmi'>
            <div className='container'>
                <div className='row justify-content-center align-items-center' >
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='my-3 text-center'>
                            <h2 className='text-white'>
                            Learn what works
                            </h2>
                            <p className='text-white lead'>
                            Personalized nutrition insights reveal what's working so you can make smarter choices.


                            </p>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className='my-2'>
                            <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flearn-what-works-large.e541991a.png&w=512&q=75' className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                        <div className='my-2'>
                        <div className="leftinput">
            <div className="panel2">
                <h3 className='text-white'> Calculate BMI</h3>
                <form onSubmit={handleSubmit} name="calform">
                    <div className='mb-3'>
                        <label className='text-white'>Age</label>
                        <input type="text" className='form-control' required placeholder='Enter Age' name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='text-white'>Gender</label>
                      <div className='d-flex'>
                     
                        <select name="weightUnit" required className='form-control ' value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                            <option value="">Choose Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className='mb-3'>
                        <label className='text-white'>Weight</label>
                      <div className='d-flex'>
                      <input type="text" className='form-control' required placeholder='Weight' name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <select name="weightUnit" className='form-control mx-2' value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                            <option value="pounds">Pounds</option>
                            <option value="kg">Kilograms</option>
                        </select>
                      </div>
                    </div>
                    <div >
                       <div className='mb-3'>
                       <label className='text-white'>Height</label>
                       </div>
                        <div className='d-flex'>
                        <input type="text" className='form-control' required placeholder='Feet' name="heightFeet" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
                        <input type="text" className='form-control mx-2' required placeholder='Inches' name="heightInches" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
                        </div>

                
                        
                      
                    </div>
                    <button className='btn btn-danger px-4 py-2 my-3 rounded-pill d-flex' type="submit">
                    <span className="material-symbols-outlined px-2 fs-4">
                                            calculate
                                        </span>
                                        Calculate
                        Calculate BMI</button>
                </form>
               
            </div>
        </div>
                        </div>
                    </div>
                    {/* end of the first col */}
                 
                    {/* end of the second col */}
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5'>
                    {bmi !== null && (
                        <div className='my-2'>
                            <h3 className='text-white'>BMI Calculator (Table)</h3>
                            <table className='table'>
            <thead>
                <tr>
                    <th>BMI Categories</th>
                    <th>Interpretation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Underweight</td>
                    <td>{bmi < 18.5 ? "You are underweight." : "-"}</td>
                </tr>
                <tr>
                    <td>Normal weight</td>
                    <td>{bmi >= 18.5 && bmi <= 24.9 ? "You have a normal weight." : "-"}</td>
                </tr>
                <tr>
                    <td>Overweight</td>
                    <td>{bmi >= 25 && bmi <= 29.9 ? "You are overweight." : "-"}</td>
                </tr>
                <tr>
                    <td>Obesity</td>
                    <td>{bmi >= 30 ? "You are obese." : "-"}</td>
                </tr>
            </tbody>
        </table>
        <p className='text-white'>
            <strong>Ideal Weight Range:</strong>
            <br />
            For your height, an ideal weight range is approximately:
            <br />
            {heightFeet}'{heightInches}'' - {(24.9 * (parseInt(heightFeet) * 12 + parseInt(heightInches)) ** 2 / 703).toFixed(2)} lbs
        </p>
                        </div>
                    )}
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-5'>
                    {bmi !== null && (
                        <div className='my-2 bg-white p-2'>
                            <h3 className='text-dark'>BMI Calculator (Bar Graph)</h3>
                            <Chart
                                options={{
                                    xaxis: {
                                        categories: ['Underweight', 'Normal weight', 'Overweight', 'Obesity'],
                                    },
                                }}
                                series={[{ data: [bmi < 18.5 ? bmi : 0, bmi >= 18.5 && bmi <= 24.9 ? bmi : 0, bmi >= 25 && bmi <= 29.9 ? bmi : 0, bmi >= 30 ? bmi : 0] }]}
                                type="bar"
                                height={350}
                            />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </section>
       </div>
    );
}

export default BMICalculator;
