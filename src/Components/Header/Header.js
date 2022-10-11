import React from 'react';


const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to Quiz<span className='text-yellow-400'>Panther</span></h1>
                    <p className="mb-5">Quiz, a contest in which participants test what they know by answering questions on one or more topics. The term quiz is a capacious one: it can refer to a single game consisting of just a few questions, or it can refer to a large-scale event involving dozens or hundreds of people.</p>

                </div>
            </div>
        </div>
    );
};

export default Header;