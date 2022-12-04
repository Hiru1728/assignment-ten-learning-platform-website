import React from 'react';
import { Link } from 'react-router-dom';

const CourseNameDetails = ({ course }) => {
    const { id, picture, name, about } = course;
    return (
        <div className="card card-compact shadow-xl">
            <figure><img className='w-[450px] h-[300px]' src={picture} alt="learning img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary text-white"><Link to={`/courses/${id}`}>Course Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseNameDetails;