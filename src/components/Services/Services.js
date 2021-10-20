import React, { useEffect, useState } from 'react';
import './Services.css'
import Cards from '../Home/Cards/Cards';
import { Card } from 'react-bootstrap';





const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakeDb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    return (
        <div className="first">
            <h1 className="text">Our Services</h1>

            <div className="second">

                {
                    services.map(service => <Cards service={service}></Cards>)
                }
            </div>
        </div>
    );
};

export default Services;