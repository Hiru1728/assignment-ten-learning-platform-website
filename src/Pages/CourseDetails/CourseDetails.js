import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(() => {
        fetch('http://localhost:5000/details-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div >
            <h4>Show here all Courses : {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}
                    >
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseDetails;