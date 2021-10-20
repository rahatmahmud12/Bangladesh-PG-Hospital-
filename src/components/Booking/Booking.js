import React from 'react';
import { useParams } from 'react-router';

const Booking = (props) => {

    const { serviceId } = useParams()
    return (
        <div>
            <div className="card w-75 mt-5 pt-5 mx-auto">
                <div className="card-body">
                    <h5 className="fs-1 text-warning pb-5 -t-3"> Service no:{serviceId}</h5>
                    <p className="card-text">The basic services that hospitals offer include: short-term hospitalization. emergency room services. general and specialty surgical services.

                        1. Primary care services. <br />
                        2. Mental health and drug treatment.<br />
                        3. Infectious disease clinics.<br />
                        4. Hospice care.<br />
                        5. Dental services.<br />
                        6.  Translation and interpreter services.</p>

                </div>
            </div>
        </div>

    );
};

export default Booking;