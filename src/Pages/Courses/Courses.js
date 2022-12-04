import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';
import CoursesCard from './CoursesCard';

const Courses = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <CourseDetails></CourseDetails>
                    </Col>
                    <Col lg='9'>
                        <CoursesCard></CoursesCard>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Courses;