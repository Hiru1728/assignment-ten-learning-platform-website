import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    // console.log(courses);
    useTitle('All courses');
    useEffect(() => {
        fetch('https://assignment-ten-learning-platform-server-website.vercel.app/courses-name')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Show here all Courses : {courses.length}</h2>
                {
                    courses.map(course => <p key={course.id}
                    >
                        <Link to={`/courses-name/${course.id}`}>{course.name}</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default CourseDetails;