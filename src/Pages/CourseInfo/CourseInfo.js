import React from 'react';
// import Pdf from 'react-to-pdf';
// import { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseInfo = () => {
    const course = useLoaderData();
    const { id, name, picture, about } = course;
    // const ref = useRef();
    return (
        <div>
            {/* <Pdf targetRef={ref} filename="document.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf} className="button">
                        Download PDF File
                    </button>
                )}
            </Pdf> */}
            {/* <div ref={ref}> */}
            <div className="card card-compact shadow-xl">
                <figure><img className='w-[450px] h-[300px]' src={picture} alt="learning img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>{about}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white"><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default CourseInfo;