import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseInfo = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>Course Length {courses.length}</h3>
            <h1>{courses.name}</h1>
            <p>{courses.guid}</p>
        </div>
    );
};

export default CourseInfo;