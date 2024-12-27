import React, { useState } from "react";
const Nutrition = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showContent, setShowContent] = useState(false);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleViewClick = (event) => {
        event.preventDefault();
        if (selectedCategory !== "") {
            setShowContent(true);
        }
    };

    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="my-2">
                                <form className="d-flex">
                                    <select
                                        className="form-control"
                                        required
                                        value={selectedCategory}
                                        onChange={handleCategoryChange}
                                    >
                                        <option value="">Select your Weight Category</option>
                                        <option value="overWeight">Over Weight</option>
                                        <option value="underWeight">Under Weight</option>
                                        <option value="normalWeight">Normal Weight</option>
                                        <option value="obesity">Obesity</option>
                                    </select>
                                    <button
                                        className="btn btn-primary px-5 py-2 rounded-0 border-0"
                                        onClick={handleViewClick}
                                    >
                                        View
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {selectedCategory === "overWeight" && (

                <div>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <diiv className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                <div className="my-2">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active px-5 py-1 rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Diet Plan</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link px-5 py-1 rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Activity Plan</button>
                                        </li>

                                    </ul>
                                </div>
                            </diiv>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <h2 className="text-dark">
                                            Precautions for overweight
                                        </h2>
                                        <p className="text-dark">
                                            Choosing healthier foods (whole grains, fruits and vegetables, healthy fats and protein sources) and beverages. Limiting unhealthy foods (refined grains and sweets, potatoes, red meat, processed meat) and beverages (sugary drinks) Increasing physical activity. Limiting television time, screen time, and other “sit time”
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="my-2">
                                            <img src="https://t3.ftcdn.net/jpg/06/12/46/54/360_F_612465495_bXJccDnlcg3XNsLXqxcFELocMvra0j0g.jpg" className="img-fluid rounded-5" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2024/01/Vegetarian-bowl-d62020c.jpg?quality=90&resize=440,400" className="img-fluid rounded-5 " />
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-3">
                                        <div className="my-2">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th className="bg-success text-dark border-0" scope="col">Vegetarian (Veg)</th>
                                                        <th className="bg-primary text-white" scope="col">Calories </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Grilled vegetables with quinoa</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Lentil soup with whole grain bread</th>
                                                        <td>250-300 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Steamed broccoli and cauliflower with brown rice</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Mixed bean salad with vinaigrette dressing</th>
                                                        <td>250-300 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Veggie stir-fry with tofu and minimal oil</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>


                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="my-2">
                                            <table class="table border">
                                                <thead>
                                                    <tr>
                                                        <th className="bg-danger text-dark border-0" scope="col">Non-Vegetarian (Non-Veg)</th>
                                                        <th className="bg-primary text-white" scope="col">Calories</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Grilled chicken breast with steamed vegetables</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Baked fish with steamed broccoli</th>
                                                        <td>250-300 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Turkey chili with vegetables</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Lean beef stir-fry with mixed vegetables</th>
                                                        <td>300-350 kcal</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Grilled shrimp with mixed greens salad</th>
                                                        <td>250-300 kcal</td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="my-2">
                                            <img src="https://images.ctfassets.net/eexbcii1ci83/6OtN4KptCymRLwU8FZahSb/c20dbf0a1ec9fc40441c3c3c3fc7857f/Indian_non-veg_diet_plan_for_weight_loss.jpg" className="img-fluid rounded-5 " />
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>

















                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 className="text-dark">
                                            Activities Plan for Over Weight (Size)
                                        </h3>
                                        <ul>
                                            <li className="py-2">
                                                <span className="fs-5 text-dark fw-bold">Walking </span>Walking is a low-impact exercise that can be done almost anywhere. Aim for at least 30 minutes of brisk walking each day. Depending on your weight and walking speed, you can burn around 150-300 calories in 30 minutes.
                                            </li>
                                            <li className="py-2">
                                                <span className="fs-5 text-dark fw-bold">Cycling </span>Cycling is another low-impact exercise that is gentle on the joints. You can either ride outdoors or use a stationary bike. Start with 20-30 minutes of cycling at a moderate intensity, aiming to gradually increase your duration and intensity over time. Cycling can burn approximately 200-400 calories in 30 minutes.
                                            </li>
                                            <li className="py-2">
                                                <span className="fs-5 text-dark fw-bold">Swimming </span>Swimming is a full-body workout that is easy on the joints. If you have access to a pool, try swimming laps for 20-30 minutes. Swimming can burn around 250-500 calories in 30 minutes, depending on the stroke and intensity.

                                            </li>
                                            <li className="py-2">
                                                <span className="fs-5 text-dark fw-bold">Strength Training </span>Incorporate strength training exercises to build muscle mass, which can increase your metabolism and help with weight loss. Focus on exercises that target major muscle groups such as squats, lunges, push-ups, and dumbbell rows. Aim for 2-3 sessions per week, with each session lasting 30-45 minutes.
                                            </li>
                                            <li className="py-2">
                                                <span className="fs-5 text-dark fw-bold">Cardio Workouts </span> Include cardio workouts such as jumping jacks, high knees, and burpees to elevate your heart rate and burn calories. You can create a circuit training routine by alternating between different cardio exercises and strength exercises. Aim for 20-30 minutes of continuous activity.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <img src="https://www.verywellfit.com/thmb/bmA6QGMMw2SyUuEroRz5VLZCCbY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/overweight-couple-on-exercise-bikes-talking-with-personal-trainer-1016741098-4ec9a56f155b49b2a36a44dfc655dc6e.jpg" className="img-fluid rounded-5 " />
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-3">
                                        <div className="my-2">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th className="bg-success text-dark border-0" scope="col">Activity </th>
                                                        <th className="bg-primary text-white" scope="col">Calories Burned (30 minutes) </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Brisk Walking</th>
                                                        <td>150-300 calories
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Cycling</th>
                                                        <td>200-400 calories</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Swimming</th>
                                                        <td>250-500 calories</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Strength Traning</th>
                                                        <td>Varies depending on exercise</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Cardio Workouts	</th>
                                                        <td>Varies depending on intensity
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>


                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <div className="my-2">
                                            <p className="text-dark">
                                                Remember to listen to your body and start slowly, gradually increasing the duration and intensity of your workouts as you build strength and endurance. It's also essential to combine exercise with a balanced diet to achieve your weight loss goals.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}
            {/* over Weight*/}









            {selectedCategory === "underWeight" && (
                <div>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <diiv className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                <div className="my-2">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active px-5 py-1 rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Diet Plan</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link px-5 py-1 rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Activity Plan</button>
                                        </li>

                                    </ul>
                                </div>
                            </diiv>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h2 className="text-dark">
                                            Precautions for Under Weight
                                        </h2>
                                        <p className="text-dark">
                                            Precautions for addressing being underweight involve several key steps:
                                        </p>
                                        <ul>
                                            <li class="py-2"><span class="fs-5 text-dark fw-bold">Balanced Diet </span>Focus on consuming a balanced diet rich in nutrients. Include plenty of protein-rich foods such as lean meats, poultry, fish, eggs, dairy, legumes, and nuts. Incorporate healthy fats from sources like avocados, olive oil, nuts, and seeds. Also, prioritize complex carbohydrates from whole grains, fruits, and vegetables.</li>
                                            <li class="py-2"><span class="fs-5 text-dark fw-bold">Regular Meals and Snacks </span>Aim to eat regular meals and snacks throughout the day to provide your body with a steady source of energy and nutrients. Avoid skipping meals, as this can further contribute to weight loss.</li>
                                            <li class="py-2"><span class="fs-5 text-dark fw-bold">Caloric Intake </span>Increase your caloric intake gradually by adding nutrient-dense foods to your meals and snacks. Choose foods that are high in calories but also nutritious, avoiding empty-calorie options like sugary snacks and beverages.</li>
                                            <li class="py-2"><span class="fs-5 text-dark fw-bold">Strength Training and Exercise </span>Incorporate strength training exercises into your routine to build muscle mass and improve overall strength. Additionally, engaging in regular physical activity can stimulate your appetite and promote healthy weight gain.</li>
                                            <li class="py-2"><span class="fs-5 text-dark fw-bold">Hydration </span> Stay hydrated by drinking an adequate amount of water throughout the day. Dehydration can affect your appetite and energy levels, so aim to drink water regularly.</li>
                                        </ul>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                        <div className="">
                                            <h3 className="text-success py-3">Vegetarian Diet Plan</h3>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr >
                                                            <th className="bg-success">Food Group</th>
                                                            <th className="bg-success">Food Examples</th>
                                                            <th className="bg-primary text-white">Calories per Serving*</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td rowspan="4">Protein Sources</td>
                                                            <td>Lentils, chickpeas, tofu, tempeh</td>
                                                            <td>100-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Greek yogurt, cottage cheese</td>
                                                            <td>80-120 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Quinoa, bulgur, buckwheat</td>
                                                            <td>150-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Soybeans, edamame</td>
                                                            <td>120-160 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="4">Fruits</td>
                                                            <td>Banana, apple, orange</td>
                                                            <td>70-100 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Berries (strawberries, blueberries)</td>
                                                            <td>50-80 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Avocado</td>
                                                            <td>160-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mango, papaya</td>
                                                            <td>80-120 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="4">Vegetables</td>
                                                            <td>Spinach, kale, broccoli</td>
                                                            <td>20-40 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sweet potato, potato</td>
                                                            <td>100-150 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bell peppers, carrots</td>
                                                            <td>20-30 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Brussels sprouts, cauliflower</td>
                                                            <td>20-40 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="4">Whole Grains</td>
                                                            <td>Brown rice, quinoa, barley</td>
                                                            <td>150-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Oats, whole grain pasta</td>
                                                            <td>120-180 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Whole wheat bread, tortillas</td>
                                                            <td>70-100 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Buckwheat, millet</td>
                                                            <td>150-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="4">Healthy Fats</td>
                                                            <td>Nuts (almonds, walnuts)</td>
                                                            <td>160-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seeds (chia seeds, flaxseeds)</td>
                                                            <td>50-80 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Olive oil, coconut oil</td>
                                                            <td>120-140 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Peanut butter, almond butter</td>
                                                            <td>90-100 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="4">Dairy Alternatives</td>
                                                            <td>Almond milk, soy milk</td>
                                                            <td>60-100 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Coconut yogurt, oat milk</td>
                                                            <td>80-120 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Vegan cheese, cashew cream</td>
                                                            <td>60-100 calories</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>


                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 class="mt-4 mb-3 text-danger">Non-Vegetarian Food Table</h3>
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="bg-danger">Food Group</th>
                                                        <th className="bg-danger">Food Examples</th>
                                                        <th className="bg-primary text-white">Calories per Serving*</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowspan="4">Lean Protein</td>
                                                        <td>Chicken breast, turkey breast</td>
                                                        <td>120-180 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fish (salmon, tuna)</td>
                                                        <td>150-200 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lean beef, pork tenderloin</td>
                                                        <td>160-220 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Eggs (boiled, scrambled)</td>
                                                        <td>70-90 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="4">Healthy Fats</td>
                                                        <td>Avocado</td>
                                                        <td>160-200 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Olive oil, coconut oil</td>
                                                        <td>120-140 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Nuts (almonds, walnuts)</td>
                                                        <td>160-200 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fatty fish (salmon, mackerel)</td>
                                                        <td>200-250 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="4">Whole Grains</td>
                                                        <td>Brown rice, quinoa</td>
                                                        <td>150-200 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Whole grain bread, pasta</td>
                                                        <td>120-180 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Barley, oats</td>
                                                        <td>120-160 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Buckwheat, millet</td>
                                                        <td>150-200 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="4">Dairy</td>
                                                        <td>Greek yogurt</td>
                                                        <td>80-120 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cottage cheese</td>
                                                        <td>60-100 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Milk (skim, low-fat)</td>
                                                        <td>80-120 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cheese (mozzarella, cheddar)</td>
                                                        <td>100-150 calories</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>

















                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 className="text-dark">
                                            Activities Plan for Over Weight (Size)
                                        </h3>
                                        <p className="text-dark">
                                            Regular physical activity is crucial for maintaining overall health and well-being. A well-rounded fitness routine should include a combination of cardiovascular exercises, strength training, flexibility exercises, and balance training. Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days per week. Remember to start slowly and gradually increase the intensity and duration of your workouts to avoid injury. Additionally, incorporate activities that you enjoy to make exercise more enjoyable and sustainable.


                                        </p>

                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                        <div className="my-2">
                                            <h3 class="mt-4 mb-3">Activity Plans</h3>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-primary text-white">Exercise Type</th>
                                                            <th className="bg-warning text-dark">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cardiovascular</td>
                                                            <td>Running, brisk walking, cycling, swimming, jumping rope</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strength Training</td>
                                                            <td>Weightlifting, bodyweight exercises (push-ups, squats, lunges), resistance band workouts</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Flexibility</td>
                                                            <td>Yoga, Pilates, stretching exercises</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Balance Training</td>
                                                            <td>Single-leg stands, balance exercises on a stability ball, tai chi</td>
                                                        </tr>
                                                        <tr>
                                                            <td>High-Intensity Interval Training (HIIT)</td>
                                                            <td>Short bursts of intense exercise followed by brief rest periods</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Circuit Training</td>
                                                            <td>Rotating through a series of exercises targeting different muscle groups with minimal rest in between</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Core Strengthening</td>
                                                            <td>Planks, crunches, Russian twists, leg raises</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group Fitness Classes</td>
                                                            <td>Zumba, spin class, aerobics, boot camp</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>


                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            {/* under Weight*/}














            {selectedCategory === "normalWeight" && (
                <div>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <diiv className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                <div className="my-2">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active px-5 py-1 rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Diet Plan</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link px-5 py-1 rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Activity Plan</button>
                                        </li>

                                    </ul>
                                </div>
                            </diiv>
                        </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 className="text-dark">
                                            Precautions for Normal Weight
                                        </h3>
                                        <p className="text-dark">
                                            Maintaining a healthy weight is essential for overall well-being. To sustain a normal weight, it's important to focus on balanced nutrition, regular physical activity, adequate sleep, and stress management. Aim to consume a varied diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats while being mindful of portion sizes. Incorporate regular exercise into your routine, including both cardiovascular activities and strength training, to support metabolism and muscle mass. Prioritize getting enough sleep each night, as insufficient sleep can disrupt hormonal balance and appetite regulation, potentially leading to weight gain. Additionally, practice stress-reduction techniques such as meditation, deep breathing exercises, or engaging in hobbies to manage stress levels, as chronic stress can contribute to weight fluctuations. By adopting these habits and making small, sustainable lifestyle changes, you can maintain a healthy weight and promote overall wellness.
                                        </p>

                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                        <div className="">
                                            <h3 className="text-success py-3">Vegetarian Diet Plan</h3>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-success">Meal</th>
                                                            <th className="bg-success">Food Items</th>
                                                            <th className="bg-primary text-white">Approx. Calories</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Breakfast</td>
                                                            <td>
                                                                <ul>
                                                                    <li>Whole grain toast with avocado slices</li>
                                                                    <li>Scrambled tofu with spinach and tomatoes</li>
                                                                    <li>Fruit salad (mix of berries, banana, and apple)</li>
                                                                    <li>Green tea or herbal tea</li>
                                                                </ul>
                                                            </td>
                                                            <td>Approx. 350-400 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lunch</td>
                                                            <td>
                                                                <ul>
                                                                    <li>Quinoa salad with mixed vegetables (bell peppers, cucumber, carrots)</li>
                                                                    <li>Lentil soup</li>
                                                                    <li>Whole wheat pita bread</li>
                                                                    <li>Greek yogurt with honey</li>
                                                                </ul>
                                                            </td>
                                                            <td>Approx. 450-500 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Snack</td>
                                                            <td>
                                                                <ul>
                                                                    <li>Vegetable sticks (carrots, celery) with hummus</li>
                                                                    <li>Handful of almonds or walnuts</li>
                                                                    <li>Fresh fruit (apple, pear)</li>
                                                                </ul>
                                                            </td>
                                                            <td>Approx. 150-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dinner</td>
                                                            <td>
                                                                <ul>
                                                                    <li>Baked sweet potato with black beans and salsa</li>
                                                                    <li>Grilled vegetables (zucchini, eggplant, bell peppers)</li>
                                                                    <li>Quinoa or brown rice</li>
                                                                    <li>Steamed broccoli with lemon</li>
                                                                </ul>
                                                            </td>
                                                            <td>Approx. 400-450 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Snack (Optional)</td>
                                                            <td>
                                                                <ul>
                                                                    <li>Smoothie made with spinach, banana, almond milk, and chia seeds</li>
                                                                    <li>Whole grain crackers with guacamole</li>
                                                                    <li>Low-fat cottage cheese with pineapple chunks</li>
                                                                </ul>
                                                            </td>
                                                            <td>Approx. 200-250 calories</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>



                                        </div>


                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 class="mt-4 mb-3 text-danger">Non-Vegetarian Food Table</h3>
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="bg-danger">Meal</th>
                                                        <th className="bg-danger">Food Items</th>
                                                        <th className="bg-primary text-white">Approx. Calories</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Breakfast</td>
                                                        <td>
                                                            <ul>
                                                                <li>Scrambled eggs with sautéed vegetables (bell peppers, onions)</li>
                                                                <li>Whole grain toast with butter or avocado</li>
                                                                <li>Fruit (e.g., orange, grapefruit)</li>
                                                                <li>Black coffee or herbal tea</li>
                                                            </ul>
                                                        </td>
                                                        <td>Approx. 350-400 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lunch</td>
                                                        <td>
                                                            <ul>
                                                                <li>Grilled chicken breast or salmon fillet</li>
                                                                <li>Quinoa or brown rice</li>
                                                                <li>Steamed vegetables (e.g., broccoli, carrots)</li>
                                                                <li>Greek yogurt with honey</li>
                                                            </ul>
                                                        </td>
                                                        <td>Approx. 450-500 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Snack</td>
                                                        <td>
                                                            <ul>
                                                                <li>Handful of almonds or mixed nuts</li>
                                                                <li>Protein shake or smoothie with milk, banana, and protein powder</li>
                                                                <li>Hard-boiled eggs</li>
                                                            </ul>
                                                        </td>
                                                        <td>Approx. 200-250 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dinner</td>
                                                        <td>
                                                            <ul>
                                                                <li>Grilled or baked fish (e.g., tilapia, cod)</li>
                                                                <li>Quinoa or couscous</li>
                                                                <li>Roasted vegetables (e.g., asparagus, Brussels sprouts)</li>
                                                                <li>Side salad with mixed greens and vinaigrette</li>
                                                            </ul>
                                                        </td>
                                                        <td>Approx. 400-450 calories</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Snack (Optional)</td>
                                                        <td>
                                                            <ul>
                                                                <li>Cottage cheese with pineapple chunks</li>
                                                                <li>Turkey or chicken breast slices with whole grain crackers</li>
                                                                <li>Smoked salmon with cucumber slices</li>
                                                            </ul>
                                                        </td>
                                                        <td>Approx. 150-200 calories</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>

















                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                            <div className="container">
                                <div className="row  align-items-center justify-content-center">
                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                        <h3 className="text-dark">
                                            Activities  you can do to maintain a normal weight(Size)
                                        </h3>
                                        <ul>
                                            <li className="py-2">Regular cardiovascular exercises such as walking, jogging, cycling, or swimming.</li>
                                            <li className="py-2">Strength training exercises using weights or resistance bands to build and maintain muscle mass.</li>
                                            <li className="py-2">High-intensity interval training (HIIT) workouts to boost metabolism and burn calories.</li>
                                            <li className="py-2">Yoga or Pilates for flexibility, balance, and stress reduction.</li>
                                            <li className="py-2">Group fitness classes like Zumba, aerobics, or kickboxing for variety and motivation.</li>
                                            <li className="py-2">Outdoor activities such as hiking, tennis, or dancing for enjoyment and calorie burning.</li>
                                            <li className="py-2">Daily walks or taking the stairs instead of the elevator to increase daily activity levels.</li>
                                            <li className="py-2">Household chores such as gardening, cleaning, or yard work to stay active throughout the day.</li>
                                            <li className="py-2">Mindful activities like tai chi or qigong for relaxation and mental well-being.</li>
                                        </ul>

                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                        <div className="my-2">
                                            <h3 class="mt-4 mb-3">Activity Plans</h3>
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-primary text-white">Exercise Type</th>
                                                            <th className="bg-primary text-white">Description</th>
                                                            <th className="bg-warning text-dark">Approx. Calories Burned per Hour*</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cardiovascular</td>
                                                            <td>Running, brisk walking, cycling, swimming, jumping rope</td>
                                                            <td>400-700 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Strength Training</td>
                                                            <td>Weightlifting, bodyweight exercises (push-ups, squats, lunges), resistance band workouts</td>
                                                            <td>200-400 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Flexibility</td>
                                                            <td>Yoga, Pilates, stretching exercises</td>
                                                            <td>100-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Balance Training</td>
                                                            <td>Single-leg stands, balance exercises on a stability ball, tai chi</td>
                                                            <td>100-200 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>High-Intensity Interval Training (HIIT)</td>
                                                            <td>Short bursts of intense exercise followed by brief rest periods</td>
                                                            <td>500-800 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Circuit Training</td>
                                                            <td>Rotating through a series of exercises targeting different muscle groups with minimal rest in between</td>
                                                            <td>400-600 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Core Strengthening</td>
                                                            <td>Planks, crunches, Russian twists, leg raises</td>
                                                            <td>200-300 calories</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group Fitness Classes</td>
                                                            <td>Zumba, spin class, aerobics, boot camp</td>
                                                            <td>400-600 calories</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>


                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )}
            {/* Normal Weight*/}

















            {selectedCategory === "obesity" && (
                  <div>
                  <div className="container">
                      <div className="row justify-content-center text-center">
                          <diiv className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                              <div className="my-2">
                                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                      <li class="nav-item" role="presentation">
                                          <button class="nav-link active px-5 py-1 rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Diet Plan</button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                          <button class="nav-link px-5 py-1 rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Activity Plan</button>
                                      </li>

                                  </ul>
                              </div>
                          </diiv>
                      </div>
                  </div>
                  <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                          <div className="container">
                              <div className="row  align-items-center justify-content-center">
                                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                      <h3 className="text-dark">
                                          Precautions for Obesity Weight
                                      </h3>
                                      <p className="text-dark">
                                      To address obesity and manage weight effectively, it's essential to adopt a comprehensive approach that encompasses dietary changes, physical activity, and lifestyle modifications. Firstly, focus on establishing a balanced and nutritious diet that includes plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats while minimizing intake of processed foods, sugary beverages, and high-calorie snacks. Portion control and mindful eating can also be beneficial in managing calorie intake. Secondly, engage in regular physical activity tailored to your fitness level and preferences. Aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity aerobic exercise per week, supplemented with muscle-strengthening activities on two or more days. Additionally, incorporate lifestyle changes such as improving sleep quality, managing stress levels, and seeking support from healthcare professionals or support groups if needed. Adopting sustainable habits and making gradual changes over time can lead to successful long-term weight management and improved overall health.
                                      </p>

                                  </div>


                                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                      <div className="">
                                          <h3 className="text-success py-3">Vegetarian Diet Plan</h3>
                                          <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th className="bg-success">Meal</th>
          <th className="bg-success">Food Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Breakfast</td>
          <td>
            <ul>
              <li>Scrambled tofu with vegetables</li>
              <li>Whole grain toast</li>
              <li>Fruit salad</li>
              <li>Green tea</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Lunch</td>
          <td>
            <ul>
              <li>Quinoa salad with mixed vegetables</li>
              <li>Vegetable soup</li>
              <li>Whole wheat chapati</li>
              <li>Low-fat yogurt</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Snack</td>
          <td>
            <ul>
              <li>Veggie sticks with hummus</li>
              <li>Mixed nuts</li>
              <li>Fresh fruit</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Dinner</td>
          <td>
            <ul>
              <li>Baked sweet potato with black beans</li>
              <li>Grilled vegetables</li>
              <li>Brown rice</li>
              <li>Steamed broccoli</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>



                                      </div>


                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                      <h3 class="mt-4 mb-3 text-danger">Non-Vegetarian Food Table</h3>
                                      <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th className="bg-danger">Meal</th>
          <th className="bg-primary text-white">Food Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Breakfast</td>
          <td>
            <ul>
              <li>Scrambled eggs with vegetables</li>
              <li>Whole grain toast</li>
              <li>Fruit salad</li>
              <li>Green tea</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Lunch</td>
          <td>
            <ul>
              <li>Grilled chicken breast</li>
              <li>Quinoa or brown rice</li>
              <li>Steamed vegetables</li>
              <li>Greek yogurt</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Snack</td>
          <td>
            <ul>
              <li>Handful of almonds</li>
              <li>Protein shake</li>
              <li>Fresh fruit</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Dinner</td>
          <td>
            <ul>
              <li>Baked salmon</li>
              <li>Quinoa or couscous</li>
              <li>Roasted vegetables</li>
              <li>Side salad</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
                                  </div>


                              </div>
                          </div>


                      </div>

















                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                          <div className="container">
                              <div className="row  align-items-center justify-content-center">
                                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                                      <h3 className="text-dark">
                                          Activities  you can do to maintain a Obesity weight(Size)
                                      </h3>
                                      <ul>
                                          <li className="py-2">Regular cardiovascular exercises such as walking, jogging, cycling, or swimming.</li>
                                          <li className="py-2">Strength training exercises using weights or resistance bands to build and maintain muscle mass.</li>
                                          <li className="py-2">High-intensity interval training (HIIT) workouts to boost metabolism and burn calories.</li>
                                          <li className="py-2">Yoga or Pilates for flexibility, balance, and stress reduction.</li>
                                          <li className="py-2">Group fitness classes like Zumba, aerobics, or kickboxing for variety and motivation.</li>
                                          <li className="py-2">Outdoor activities such as hiking, tennis, or dancing for enjoyment and calorie burning.</li>
                                          <li className="py-2">Daily walks or taking the stairs instead of the elevator to increase daily activity levels.</li>
                                          <li className="py-2">Household chores such as gardening, cleaning, or yard work to stay active throughout the day.</li>
                                          <li className="py-2">Mindful activities like tai chi or qigong for relaxation and mental well-being.</li>
                                      </ul>

                                  </div>


                                  <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 p-3">
                                      <div className="my-2">
                                          <h3 class="mt-4 mb-3">Activity Plans</h3>
                                          <div class="table-responsive">
                                              <table class="table table-bordered">
                                                  <thead>
                                                      <tr>
                                                          <th className="bg-primary text-white">Exercise Type</th>
                                                          <th className="bg-primary text-white">Description</th>
                                                          <th className="bg-warning text-dark">Approx. Calories Burned per Hour*</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      <tr>
                                                          <td>Cardiovascular</td>
                                                          <td>Running, brisk walking, cycling, swimming, jumping rope</td>
                                                          <td>400-700 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Strength Training</td>
                                                          <td>Weightlifting, bodyweight exercises (push-ups, squats, lunges), resistance band workouts</td>
                                                          <td>200-400 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Flexibility</td>
                                                          <td>Yoga, Pilates, stretching exercises</td>
                                                          <td>100-200 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Balance Training</td>
                                                          <td>Single-leg stands, balance exercises on a stability ball, tai chi</td>
                                                          <td>100-200 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>High-Intensity Interval Training (HIIT)</td>
                                                          <td>Short bursts of intense exercise followed by brief rest periods</td>
                                                          <td>500-800 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Circuit Training</td>
                                                          <td>Rotating through a series of exercises targeting different muscle groups with minimal rest in between</td>
                                                          <td>400-600 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Core Strengthening</td>
                                                          <td>Planks, crunches, Russian twists, leg raises</td>
                                                          <td>200-300 calories</td>
                                                      </tr>
                                                      <tr>
                                                          <td>Group Fitness Classes</td>
                                                          <td>Zumba, spin class, aerobics, boot camp</td>
                                                          <td>400-600 calories</td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>

                                      </div>


                                  </div>



                              </div>
                          </div>
                      </div>

                  </div>
              </div>
            )}

            {/* Obsity Weight*/}


        </div>
    );
};
export default Nutrition;