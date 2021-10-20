import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h3>Hello Booking{ }</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking{serviceId}</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
            <h3>Hello Booking</h3>
        </div>
    );
};

export default Booking;