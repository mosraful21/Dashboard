import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <div class="grid grid-cols-4">
                <div className=''><Navbar></Navbar></div>
                <div class="col-span-3"><Header></Header> <Outlet></Outlet></div>
            </div>

        </div>
    );
};

export default Main;