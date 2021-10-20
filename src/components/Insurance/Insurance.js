import React from 'react';
import {
    Button
    , Card
} from 'react-bootstrap';

const Insurance = () => {
    return (
        <div>
            <Card className="w-100 my-5">
                <Card.Header className="fs-1 font-bold font-primary">Insurance Program</Card.Header>
                <Card.Body>
                    <Card.Title className="fs-4">Honuma Health Insurance</Card.Title>
                    <Card.Text className="">
                        Very confident and reliable insurance plan for you. <br /><br />
                        <Button
                            variant="primary">Details</Button>
                    </Card.Text>
                    <br /><br />
                    <Card.Title className="fs-4">Aetna Health Insurance</Card.Title>
                    <Card.Text className="">
                        Credible and easygoing for all.<br /> <br />
                        <Button
                            variant="primary">Details</Button>
                    </Card.Text>







                </Card.Body>
            </Card>
        </div>
    );
};

export default Insurance;