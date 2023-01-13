import { UserGroupIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './CompanyStatus.css';
import icon1 from '../../../src/asscet/icon1.png';
import icon2 from '../../../src/asscet/icon2.png';
import icon3 from '../../../src/asscet/icon3.png';
import icon4 from '../../../src/asscet/icon4.png';
import icon5 from '../../../src/asscet/icon5.png';
import icon6 from '../../../src/asscet/icon6.png';

const CompanyStatus = ({ status }) => {
    const { title, member } = status;
    return (
        <div className="bg-white rounded-lg mt-3">
            <div className="card-body">
                <div className='flex items-center gap-1'>
                    <UserGroupIcon className='w-4 h-4' />
                    <p className="text-sm text">{title}</p>
                </div>

                <div className='flex items-center justify-between mt-3'>
                    <h1 className='text-4xl font-bold'>{member}</h1>
                    <button className="btns">View All</button>
                </div>
                <hr className='mt-8 mb-3' />
                <div className="card-actions">
                    <img src={icon1} alt="" className="w-6 h-6" />
                    <img src={icon2} alt="" className="w-6 h-6 ml-[-15px]" />
                    <img src={icon3} alt="" className="w-6 h-6 ml-[-15px]" />
                    <img src={icon4} alt="" className="w-6 h-6 ml-[-15px]" />
                    <img src={icon5} alt="" className="w-6 h-6 ml-[-15px]" />
                    <img src={icon6} alt="" className="w-6 h-6 ml-[-15px]" />
                </div>
            </div>
        </div>
    );
};

export default CompanyStatus;