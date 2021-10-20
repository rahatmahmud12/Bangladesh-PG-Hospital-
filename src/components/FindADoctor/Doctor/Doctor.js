import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {
    const { name, img, Age, speciality, describtion } = props.doctor
    return (
        <div>
            <Card className="one-card col-sm-1">
                <Card.Img className="doctor-pic" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="">
                        Age:  {Age}
                    </Card.Text>
                    <Card.Text className="descrip">
                        {describtion}
                    </Card.Text>
                    <br />

                    <Link to="/" className="bg px-2 py-1  rounded">Search More</Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-light text-2xl ">{speciality}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Doctor;