import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseNameDetails from '../CourseNameDetails/CourseNameDetails';

const CourseNameCard = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map((course, i) => <CourseNameDetails
                    key={i}
                    course={course}
                ></CourseNameDetails>)
            }
        </div>
    );
};

export default CourseNameCard;