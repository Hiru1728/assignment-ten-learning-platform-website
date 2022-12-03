import React from 'react';

const Blog = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">What is CORS?</h2>
                <p>In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    Firebase is the default tool for many mobile teams as it assists throughout the entire app development lifecycle, including building, testing, releasing, monitoring, and engaging. Most of its functionality is free, causing many companies to use it without considering whether it's ideal for their use case.

                    However, any platform as comprehensive as Firebase is bound to lack advanced features. This might not be a problem for mobile teams that don't have advanced needs. However, for companies that rely on mobile as a primary touchpoint and revenue source, they will likely find themselves frustrated with Firebase limitations that prevent them from delivering optimized mobile experiences.

                    So whether you need an alternative to the entire Firebase platform or an alternative to a specific Firebase feature, here's a breakdown of other tools worth considering.

                    For many Firebase users, switching to an entirely new platform isn't necessary. Rather, many mobile teams just need a few advanced features for particular Firebase services.

                    Here are the core Firebase features:

                    Build Services
                    Release & Monitor Services
                    Engage Services
                    Below, we'll discuss each of these services and some alternatives for those that need more advanced options.</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">How does the private route work?</h2>
                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                    The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">What is Node? How does Nodes work?</h2>
                <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
            </div>
        </div>
    );
};

export default Blog;