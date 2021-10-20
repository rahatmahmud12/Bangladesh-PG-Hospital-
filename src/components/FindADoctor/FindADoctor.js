import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import './findDoctor.css'

const FindADoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./fakeDbTwo.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="pt-5 pb-5">
            <CardGroup className="pb-5 pt-2 main">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }

            </CardGroup>
        </div>
    );
};

export default FindADoctor;