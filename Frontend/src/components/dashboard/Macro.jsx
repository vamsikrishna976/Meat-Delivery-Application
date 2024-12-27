import React, { useState } from 'react';

const Macro = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [weightUnit, setWeightUnit] = useState('pounds'); // Default weight unit
    const [goal, setGoal] = useState('loss05'); // Default goal option
    const [macroResults, setMacroResults] = useState(null); // State to store macro results

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate macro results here
        const calculatedMacroResults = calculateMacroResults(age, weight, heightFeet, heightInches, weightUnit, goal);
        setMacroResults(calculatedMacroResults);
    };

    const calculateMacroResults = (age, weight, heightFeet, heightInches, weightUnit, goal) => {
        // Convert height to inches
        const heightInInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
    
        // Convert weight to kilograms if it's in pounds
        let weightInKg = parseFloat(weight);
        if (weightUnit === 'pounds') {
            weightInKg *= 0.453592; // 1 pound = 0.453592 kilograms
        }
    
        // Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
        let bmr;
        if (goal.startsWith('loss')) {
            bmr = 10 * weightInKg + 6.25 * heightInInches - 5 * parseInt(age) - 161; // For weight loss
        } else if (goal.startsWith('gain')) {
            bmr = 10 * weightInKg + 6.25 * heightInInches - 5 * parseInt(age) + 5; // For weight gain
        } else {
            bmr = 10 * weightInKg + 6.25 * heightInInches - 5 * parseInt(age); // For weight maintenance
        }
    
        // Calculate macro ratios based on goal
        let proteinRatio, carbsRatio, fatsRatio;
        if (goal.endsWith('05')) {
            proteinRatio = 0.3;
            carbsRatio = 0.4;
            fatsRatio = 0.3;
        } else if (goal.endsWith('1')) {
            proteinRatio = 0.35;
            carbsRatio = 0.4;
            fatsRatio = 0.25;
        } else {
            proteinRatio = 0.4;
            carbsRatio = 0.4;
            fatsRatio = 0.2;
        }
    
        // Calculate macro amounts based on BMR and macro ratios
        const protein = Math.round((proteinRatio * bmr) / 4); // 1 gram of protein = 4 calories
        const carbs = Math.round((carbsRatio * bmr) / 4); // 1 gram of carbs = 4 calories
        const fats = Math.round((fatsRatio * bmr) / 9); // 1 gram of fats = 9 calories
        const calories = protein * 4 + carbs * 4 + fats * 9;
    
        return {
            protein,
            carbs,
            fats,
            calories
        };
    };
    

    return (
       <div>
        <section className='py-5' id='macro'>
            <div className='container'>
                <div className='row justify-content-start align-items-center'>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='my-2'>
                            <h3 className='text-dark'>Macro Diet Caluclation</h3>
                        <div className="leftinput">
            <div className="panel2">
                <form onSubmit={handleSubmit} name="calform">
                    <div className='mb-3'>
                        <label className='text-dark'>Age</label>
                        <input type="text" className='form-control' required placeholder='Age' name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label className='text-dark'>Weight</label>
                       <div className='d-flex'>
                       <input type="text" className='form-control' required placeholder='weight' name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <select name="weightUnit" className='form-control mx-2' value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                            <option value="">Weight In</option>
                            <option value="pounds">Pounds</option>
                            <option value="kg">Kilograms</option>
                        </select>
                       </div>
                    </div>
                    <div className='mb-3'>
                        <label className='text-dark'>Height</label>
                       <div className='d-flex'>
                       <input type="text" className='form-control' required placeholder='In Feet' name="heightFeet" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
                        <input type="text" className='form-control mx-2' required placeholder='In Inches' name="heightInches" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
                       </div>
                    </div>
                   
                    <div className='mb-3'>
                        <label className='text-dark'>Your Goal</label>
                        <select id="cgoal" className='form-control' name="cgoal" value={goal} onChange={(e) => setGoal(e.target.value)}>
                            <option value="maintain">Maintain weight</option>
                            <option value="loss05">Mild weight loss of 0.5 lb (0.25 kg) per week</option>
                            <option value="loss1">Weight loss of 1 lb (0.5 kg) per week</option>
                            <option value="loss2">Extreme weight loss of 2 lb (1 kg) per week</option>
                            <option value="gain05">Mild weight gain of 0.5 lb (0.25 kg) per week</option>
                            <option value="gain1">Weight gain of 1 lb (0.5 kg) per week</option>
                            <option value="gain2">Extreme weight gain of 2 lb (1 kg) per week</option>
                        </select>
                    </div>
                    <button className='btn btn-danger px-4 py-2 rounded-5 my-2 d-flex' type="submit">
                    <span className="material-symbols-outlined px-2 fs-4">
                                            calculate
                                        </span>
                                        Calculate
                        Calculate</button>
                </form>
            </div>
            {/* Display macro results in table */}
          
        </div>
                        </div>
                    </div>
                    {/* end of the first col */}
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='my-2'>
                            <h3 className='text-dark'>
                            Track food, fitness & fasting
                            </h3>
                            <p className='text-dark'>Tracking calories and macros is easy with our barcode scanner and device integration.</p>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/young-woman-using-calorie-counter-app-on-smartphone-royalty-free-image-1642106909.jpg?crop=1xw:0.84355xh;center,top' className='img-fluid rounded-5' />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                        <div className='my-2'>
                        {macroResults && (
                <div className="macro-results">
                    <h2>Macro Results</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nutrient</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Protein (g)</td>
                                <td>{macroResults.protein}</td>
                            </tr>
                            <tr>
                                <td>Carbs (g)</td>
                                <td>{macroResults.carbs}</td>
                            </tr>
                            <tr>
                                <td>Fats (g)</td>
                                <td>{macroResults.fats}</td>
                            </tr>
                            <tr>
                                <td>Calories</td>
                                <td>{macroResults.calories}</td>
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

export default Macro;
