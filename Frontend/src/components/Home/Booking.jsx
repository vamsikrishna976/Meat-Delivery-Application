import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingFrom";// Corrected import statement

const Booking = () => {
    const [trip, setTrip] = useState([{
        "tripType": "",
        "vehicleType": "",
    }]);

    const [multi, setMulti] = useState([1]);

    const [reminders, setReminders] = useState([]);

    // Function to add a reminder
    const addReminder = (place, date) => {
        const newReminder = { place, date };
        setReminders([...reminders, newReminder]);
    };

    // Function to handle trip type selection
    function handleTrip(trip_type) {
        setMulti([1]);

        let mainTrip = [...trip];
        mainTrip[0].tripType = trip_type.type;

        setTrip(mainTrip);
    }

    // Function to handle vehicle type selection
    function handleVehicle(vehicle_type) {
        let mainTrip = [...trip];
        mainTrip[0].vehicleType = vehicle_type.type;

        setTrip(mainTrip);
    }

    // Function to handle multi-city selection
    function handleMultiCity() {
        const mainMulti = [...multi, 1];
        setMulti(mainMulti);
    }

    return (
        <div className='pt-40 pb-20'>
            <form className='max-w-5xl px-6 pt-8 pb-10 w-full mx-auto bg-white rounded-lg drop-shadow'>
                {/* Trip type and vehicle type selection */}
                <div className='flex items-center justify-between flex-wrap mb-10'>
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Trip type:</h2>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'one-way'}) } /> One-way
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'round-way'}) } /> Round
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'multi-city'}) } /> Multi-city
                        </span>
                    </div>
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Vehicle Type:</h2>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'bus'}) } /> Bus
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'truck'}) } /> Truck
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'bike'}) } /> Bike
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'car'}) } /> Car
                        </span>
                    </div>
                </div>

                {/* Add city button for multi-city trips */}
                {(trip[0].tripType === 'multi-city') &&
                <div className='inline-block mb-3 font-medium cursor-pointer p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300' onClick={ () => handleMultiCity() }>+ Add city</div>}
                
                {/* Booking forms for multi-city trips */}
                {multi.map(item => (
                    <div key={item.index}>
                        <BookingForm trip={trip} addReminder={addReminder} />
                    </div>
                ))}
                
                {/* Fare type and popular search sections */}
                <div className="flex items-center justify-between flex-wrap mb-10">
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Fare type:</h2>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Regular</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Armed Forces</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Senior Citizen</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Student</span>
                    </div>
                    <div className="flex-item mt-2 lg:mt-0">
                        <h2 className='text-lg font-bold mb-3'>Popular search:</h2>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded ml-1 transition-all duration-300 hover:bg-gray-300'>Dhaka to Madaripur</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded ml-1 transition-all duration-300 hover:bg-gray-300'>Dhaka to Savar</span>
                    </div>
                </div>

                {/* Send Request button */}
                <div className="w-full text-center pt-10">
                    <Link to='/thanks' className='py-4 px-12 rounded-md bg-indigo-600 text-white font-bold'>Send Request</Link>
                </div>

                {/* Reminder section */}
                <div className="mt-8">
                    <h2 className="text-lg font-bold mb-3">Reminders:</h2>
                    {reminders.length === 0 ? (
                        <p>No reminders added.</p>
                    ) : (
                        <ul>
                            {reminders.map((reminder, index) => (
                                <li key={index}>
                                    <p>{reminder.place} - {reminder.date}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Booking;
