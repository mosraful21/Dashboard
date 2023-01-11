import { UserGroupIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './CompanyStatus.css';

const CompanyStatus = ({ status }) => {
    const { title, member } = status;
    return (
        <div className="bg-white rounded-lg mt-3">
            <div className="card-body">
                <div className='flex items-center gap-1'>
                    <UserGroupIcon className='w-4 h-4'/>
                    <p className="text-sm">{title}</p>
                </div>

                <div className='flex items-center justify-between mt-3'>
                    <h1 className='text-4xl font-bold'>{member}</h1>
                    <button className="btns">View All</button>
                </div>

                <div className="card-actions justify-end">
                    <button className="">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyStatus;