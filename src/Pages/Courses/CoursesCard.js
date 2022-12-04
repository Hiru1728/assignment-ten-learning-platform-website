import React, { useState, useEffect } from 'react';
import ShowAllCourses from './ShowAllCourses/ShowAllCourses';

const CoursesCard = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(() => {
        fetch('https://assignment-ten-learning-platform-server-website.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses.map(course => <ShowAllCourses
                    key={course.id}
                    course={course}
                ></ShowAllCourses>)
            }
        </div>
    );
};

export default CoursesCard;