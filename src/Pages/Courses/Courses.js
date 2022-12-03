import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <CourseDetails></CourseDetails>
                    </Col>
                    <Col lg='9'>

                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Courses;