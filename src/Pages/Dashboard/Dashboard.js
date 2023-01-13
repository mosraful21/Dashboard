import React from 'react';
import CompanyStatus from './CompanyStatus';
import Rechart from './Rechart';

const status = [
    {
        "id": 1,
        "title": "Total Employee",
        "member": "450"
    },
    {
        "id": 2,
        "title": "Attend Today",
        "member": "420"
    },
    {
        "id": 3,
        "title": "Employees on Leave",
        "member": "15"
    },
    {
        "id": 4,
        "title": "Next Expense Request",
        "member": "5"
    },

]

const Dashboard = () => {
    return (
        <div className='ml-16 mr-16'>
            <h1 className='text-4xl text-primary font-bold py-8'>Dashboard</h1>
            <p className='text-black font-bold'>Company Status</p>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 rounded-lg'>
                {
                    status.map(status => <CompanyStatus
                        key={status.id}
                        status={status}
                    ></CompanyStatus>)
                }
            </div>
<hr className='mt-5'/>

            <p className='text-black font-bold mt-16 mb-4'>Expense Report</p>
            <div className='flex'>
                <div className='w-1/2 bg-white rounded-xl'>
                    <Rechart></Rechart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;