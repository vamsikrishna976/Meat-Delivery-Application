import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Chart from "react-apexcharts";

const Cal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('pounds'); // Default weight unit
    const [gender, setGender] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [activityLevel, setActivityLevel] = useState('1.465'); // Default activity level

    const [showChart, setShowChart] = useState(false); // State to control the visibility of the chart
    const [calorieData, setCalorieData] = useState(null); // State to store calorie data for the pie chart
    const [showTable, setShowTable] = useState(false); // State to control the visibility of the table

    useEffect(() => {
        // Recalculate calorie data whenever form fields change
        if (age && weight && gender && heightFeet && heightInches && activityLevel) {
            const totalCalories = calculateCalories();
            const data = {
                labels: ['Maintain weight', 'Mild weight loss (0.5 lb/week)', 'Weight loss (1 lb/week)', 'Extreme weight loss (2 lb/week)'],
                series: [
                    totalCalories,
                    totalCalories * 0.9,
                    totalCalories * 0.79,
                    totalCalories * 0.59
                ],
            };
            setCalorieData(data);
        }
    }, [age, weight, weightUnit, gender, heightFeet, heightInches, activityLevel]);

    const calculateCalories = () => {
        // Convert height to inches
        const heightInInches = (parseInt(heightFeet) * 12) + parseInt(heightInches);

        // Convert weight to pounds if it's in kilograms
        let weightInPounds = parseFloat(weight);
        if (weightUnit === 'kg') {
            weightInPounds *= 2.20462; // 1 kg = 2.20462 pounds
        }

        // Calculate BMR based on gender
        let bmr;
        if (gender === 'male') {
            bmr = 66 + (6.2 * weightInPounds) + (12.7 * heightInInches) - (6.76 * parseInt(age));
        } else if (gender === 'female') {
            bmr = 655 + (4.35 * weightInPounds) + (4.7 * heightInInches) - (4.7 * parseInt(age));
        }

        // Adjust BMR based on activity level
        const totalCalories = bmr * parseFloat(activityLevel);

        return totalCalories;
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        setShowChart(true); // Show the chart after calculating calories
        setShowTable(true); // Show the table after calculating calories
    };

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
        dispatch({ type: "ISlOGGEDOUT" });
    };

    return (
        <div>
            <section className='py-5' id='cal'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='my-2 text-center'>
                                <h2 className='text-dark'>
                                    Change your habits and reach your goals
                                </h2>
                                <p className='text-secondary  lead'>Now you have the tools and knowledge to build healthy habits for life.
                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <h4 className='text-dark my-3'>Calculate Your Calories With Us !</h4>
                                <form onSubmit={handleCalculate}>
                                    <div className='mb-3'>
                                        <label className='text-dark'>Age</label>
                                        <input type='text' className='form-control' placeholder='Enter Age' required value={age} onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-dark'>Gender</label>
                                        <select className='form-control' value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    <div className='mb-3'>
                                        <label className='text-dark'>Weight</label>
                                        <div className='d-flex'>
                                            <input type='text' className='form-control' required placeholder='Enter Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
                                            <select className='form-control mx-2' value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                                                <option value="" >Choose In</option>
                                                <option value="pounds">Pounds</option>
                                                <option value="kg">Kilograms</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label className='text-dark'>Height</label>
                                        <div className='d-flex'>
                                            <input type='text' className='form-control' required placeholder='Feet' value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
                                            <input type='text' className='form-control mx-2' required placeholder='Inches' value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label className='text-dark'>Activity Level</label>
                                        <select className='form-control' value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                                            <option value="1">Basal Metabolic Rate (BMR)</option>
                                            <option value="1.2">Sedentary: little or no exercise</option>
                                            <option value="1.375">Light: exercise 1-3 times/week</option>
                                            <option value="1.465">Moderate: exercise 4-5 times/week</option>
                                            <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
                                            <option value="1.725">Very Active: intense exercise 6-7 times/week</option>
                                            <option value="1.9">Extra Active: very intense exercise daily, or physical job</option>
                                        </select>
                                    </div>

                                    <button className='btn btn-danger px-5 py-2 d-flex rounded-pill border-0 mt-2' type="submit">
                                        <span className="material-symbols-outlined px-2 fs-4">
                                            calculate
                                        </span>
                                        Calculate
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                            <div className='my-2'>
                                <img src='https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchange-your-habits-large.1cf58b0c.png&w=512&q=75' className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm col-md-5 col-lg-5 mt-5'>
                            {showChart && calorieData && (
                                <div className='my-2'>
                                    <h3 className='text-dark'>Calorie Recommendations (Pie Chart)</h3>
                                    <Chart
                                        options={{
                                            labels: calorieData.labels,
                                            chart: {
                                                width: 500, // Increase width
                                                height: 400, // Increase height
                                            }
                                        }}
                                        series={calorieData.series}
                                        type="pie"
                                    />
                                </div>
                            )}
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5'>
                            <div className='my-2'>
                                {showTable && (
                                    <div className='my-2'>
                                        <h3 className='text-dark'>Calorie Recommendations (Table)</h3>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <th>Maintenance</th>
                                                    <th>Calories/day</th>
                                                    <th>Weight Loss</th>
                                                    <th>Calories/day</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Maintain weight</td>
                                                    <td>{calculateCalories()}</td>
                                                    <td>Mild weight loss (0.5 lb/week)</td>
                                                    <td>{(calculateCalories() * 0.9).toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight loss (1 lb/week)</td>
                                                    <td>{(calculateCalories() * 0.79).toFixed(2)}</td>
                                                    <td>Extreme weight loss (2 lb/week)</td>
                                                    <td>{(calculateCalories() * 0.59).toFixed(2)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                       

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cal;
