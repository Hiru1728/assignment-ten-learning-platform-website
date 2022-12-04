import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { guid } = course;
    return (
        <div>
            <h2 className="text-4xl text-center">Your Id: {guid}</h2>
        </div>
    );
};

export default CheckOut;