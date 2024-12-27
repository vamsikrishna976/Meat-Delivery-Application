import React from "react";
            const BookingDetailsCard = ({ selectedPlace, fromDate, toDate, adultCount, childCount, hotelName }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Booking Details</h5>
                <p className='card-text'>Destination: {selectedPlace}</p>
                {fromDate && <p className='card-text'>From Date: {fromDate.toString()}</p>}
                {toDate && <p className='card-text'>To Date: {toDate.toString()}</p>}
                <p className='card-text'>Adults: {adultCount}</p>
                <p className='card-text'>Children: {childCount}</p>
                <p className='card-text'>Hotel: {hotelName}</p>
            </div>
        </div>
    );
};
export default BookingDetailsCard;
       