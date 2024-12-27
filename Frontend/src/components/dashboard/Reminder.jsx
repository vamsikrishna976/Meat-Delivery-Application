import React, { useState, useEffect } from 'react';
import downloadImage from '../images/download.png';
import notificationSound from '../images/notify.mp3';

function Reminder() {
    const [medicineName, setMedicineName] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [reminders, setReminders] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [audio] = useState(new Audio(notificationSound));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const addReminder = () => {
        if (!medicineName || !reminderDate || !reminderTime) {
            alert('Please provide all the reminder details.');
            return;
        }

        const newReminder = {
            medicineName,
            reminderDate,
            reminderTime
        };

        setReminders([...reminders, newReminder]);
        setMedicineName('');
        setReminderDate('');
        setReminderTime('');

        // Calculate the time difference between the reminder time and the current time
        const currentTime = new Date();
        const [hours, minutes] = reminderTime.split(':');
        const reminderDateTime = new Date(reminderDate);
        reminderDateTime.setHours(hours, minutes, 0, 0);
        const timeDifference = reminderDateTime.getTime() - currentTime.getTime();

        // Set up the alert timer if the reminder time is in the future
        if (timeDifference > 0) {
            setTimeout(() => {
                alert(`Its Time For ${medicineName}!`);
                audio.play();
            }, timeDifference);
        }
    };

    const deleteReminder = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index, 1);
        setReminders(newReminders);
    };

    return (
        <div>
            <section className='py-5 bg-primary' id='remind'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <div className="reminder-app py-5">
                                    <h1 className='text-white' >Activities Reminder App</h1>
                                    <div>
                                        <p className='text-white d-flex align-items-center'>Current Time:<span className='fs-2 px-2 '> {currentTime.toLocaleTimeString()}</span></p>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-white' htmlFor="medicineName">Activity :</label>
                                        <input
                                            type="text"
                                            id="medicineName"
                                            className='form-control'
                                            required
                                            placeholder='List Your Activity'
                                            value={medicineName}
                                            onChange={(e) => setMedicineName(e.target.value)}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-white' htmlFor="reminderDate">Reminder Date:</label>
                                        <input
                                            type="date"
                                            required
                                            className='form-control'
                                            id="reminderDate"
                                            value={reminderDate}
                                            onChange={(e) => setReminderDate(e.target.value)}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='text-white' htmlFor="reminderTime">Reminder Time:</label>
                                        <input
                                            className='form-control'
                                            type="time"
                                            id="reminderTime"
                                            value={reminderTime}
                                            onChange={(e) => setReminderTime(e.target.value)}
                                        />
                                    </div>
                                    <button className='btn btn-danger px-4 py-2 border-0 rounded-pill d-flex my-3' onClick={addReminder}>
                                        <span class="material-symbols-outlined px-3">
                                            notifications
                                        </span>
                                        Add Reminder</button>

                                    <div className="reminder-list">
                                        <h3 className='text-white' >Your Reminder Acativity:</h3>
                                        <p className='my-3'>
                                            {reminders.map((reminder, index) => (
                                                <p className='bg-white d-flex align-items-center justify-content-around py-1 border-0 rounded-3' key={index}>
                                                    <span className='fs-5'>  {reminder.medicineName} </span>
                                                    <span className='text-dark fs-5'>{reminder.reminderDate}</span>
                                                    <span className='text-dark fs-5'>{reminder.reminderTime}</span>

                                                    <button className='btn btn-danger d-flex px-3 py-1 rounded-pill ' onClick={() => deleteReminder(index)}>
                                                        <span class="material-symbols-outlined px-2">
                                                            delete
                                                        </span>
                                                        Delete</button>
                                                </p>
                                            ))}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5'>
                            <div className='my-2'>
                                <img src={downloadImage} className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reminder;
