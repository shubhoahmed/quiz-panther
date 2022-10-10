import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">QuizPanther</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;