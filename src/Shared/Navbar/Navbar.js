import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RectangleStackIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div class="bg-primary sidebar">

            <h3 className='text-white text-2xl'>Place A Logo Here</h3>
            <div className='mt-20'>
                <ul className='text-white'>

                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/' className={`${({isActive}) => isActive ? 'active' : undefined} flex`}>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/attendance' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Attendance
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/employees' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Employees
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/leaves' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Leaves
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/expense' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Expense
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/notice' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Notice
                        </NavLink>
                    </li>
                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/departments' className='flex'>
                            <RectangleStackIcon className='w-8 h-8 mr-3 ml-16' />
                            Departments
                        </NavLink>
                    </li>

                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0}><li className='text-xl font-semibold mb-4'>
                            <NavLink className='flex'>
                                <ChevronDownIcon className='w-6 h-6 ml-6' />
                                <Cog6ToothIcon className='w-8 h-8 mr-3 ml-4' />
                                Setting
                            </NavLink>
                        </li></label>
                        <ul tabIndex={0} className="dropdown-content menu p-1 w-48 drop-menu">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>

                    <li className='text-xl font-semibold mb-4'>
                        <NavLink to='/departments' className='flex'>
                            <ArrowRightOnRectangleIcon className='w-8 h-8 mr-3 ml-16' />
                            Logout
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Navbar;