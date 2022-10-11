import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.css';



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;