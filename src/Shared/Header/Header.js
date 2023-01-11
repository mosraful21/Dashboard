import React, { useState } from 'react';
import { CalendarDaysIcon, BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css';

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-white justify-between">
      <div className="flex">

        {/* item button start */}
        <div className="text-black lg:hidden">
          {
            open ?
              <XMarkIcon onClick={() => setOpen(!open)} className='h-6 w-6' />
              : <Bars3Icon onClick={() => setOpen(!open)} className='h-6 w-6' />
          }
        </div>
        {/* item button end */}

        <div className="flex items-center search-field ml-4">
          <input type="text" placeholder="Search" className="input-field w-full max-w-xs" />
        </div>
      </div>

      <div className="flex">
        <div className="dropdown dropdown-end flex items-center">
          <CalendarDaysIcon className="h-5 w-5 mr-6 ml-3 cursor-pointer" />
          <BellIcon className="h-5 w-5 mr-6 cursor-pointer" />
          <div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-3">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt='images' />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between"> Profile </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;