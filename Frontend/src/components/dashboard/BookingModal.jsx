// BookingModal.js

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BookingModal = ({ show, handleClose, handleSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit({
            firstName,
            lastName,
            mobileNumber,
            email
        });
    };
    

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Booking Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='d-flex' onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastNameChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" id="mobileNumber" value={mobileNumber} onChange={handleMobileNumberChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default BookingModal;
