import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../store/modules/user/types'
import { Button , Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, } from 'reactstrap';

const AboutUs: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)

    return (
        <div>
            <h1>Matriculados, Academia Accenture 2.1</h1>
            <>
                { state.map( (user, index) => (
                    <Card>
                        <CardBody key={index}>
                        <CardTitle tag="h5">{user.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{user.email}</CardSubtitle>
                        
                        </CardBody>
                    </Card>

                ))}
            </>
        </div>
    );
}

export default AboutUs;