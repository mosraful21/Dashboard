import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { EyeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';


const tableData = [
    {
        "name": "Jahid Hasan",
        "dept": "HR & Admin",
        "checkIn": "09.45 am",
        "checkout": "06.05 pm",
        "remake": "",
        "hours": "",
        "overtime": "",
        "icon": ""
    },
    {
        "name": "Jahid Hasan",
        "dept": "HR & Admin",
        "checkIn": "10.30 am",
        "checkout": "05.30 pm",
        "remake": "",
        "hours": "",
        "overtime": "",
        "icon": ""
    },
    {
        "name": "Jahid Hasan",
        "dept": "HR & Admin",
        "checkIn": "09.45 am",
        "checkout": "06.30 pm",
        "remake": "",
        "hours": "",
        "overtime": "",
        "icon": ""
    },
    {
        "name": "Jahid Hasan",
        "dept": "HR & Admin",
        "checkIn": "10.45 am",
        "checkout": "05.45 pm",
        "remake": "",
        "hours": "",
        "overtime": "",
        "icon": ""
    },
]

const Attendance = () => {
    return (
        <div className='ml-16 mr-16'>
            <div className='flex items-center justify-between py-8'>
                <h1 className='text-4xl text-primary font-bold'>Attendance</h1>
                <div className='flex gap-8'>
                    <button className="btns">Download Report</button>
                    <Cog6ToothIcon className='w-8 h-8 text-primary' />
                </div>
            </div>

            <div className='flex gap-3'>
                <input type="date" placeholder='' className='p-3 w-52 rounded-lg border-2' />
                <input type="text" placeholder='Department' className='p-3 rounded-lg border-2' />

                <div>
                    <select className='w-48 p-3 rounded-lg border-2'>
                        <option>Attendance</option>
                        <option>option-1</option>
                        <option>option-2</option>
                        <option>option-3</option>
                        <option>option-4</option>
                    </select>
                </div>

                <div>
                    <select className='w-48 p-3 rounded-lg border-2'>
                        <option>Present</option>
                        <option>option-1</option>
                        <option>option-2</option>
                        <option>option-3</option>
                        <option>option-4</option>
                    </select>
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <input type="text" placeholder='Check In' className='p-3 rounded-lg border-2' />
                <input type="text" placeholder='Location' className='p-3 rounded-lg border-2' />

                <div>
                    <select className='w-48 p-3 rounded-lg border-2'>
                        <option>Designation</option>
                        <option>option-1</option>
                        <option>option-2</option>
                        <option>option-3</option>
                        <option>option-4</option>
                    </select>
                </div>

                <div>
                    <select className='w-48 p-3 rounded-lg border-2'>
                        <option>Department</option>
                        <option>option-1</option>
                        <option>option-2</option>
                        <option>option-3</option>
                        <option>option-4</option>
                    </select>
                </div>
            </div>


            <div className="overflow-x-auto w-full mt-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Remark</th>
                            <th>Hours</th>
                            <th>Overtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        tableData.map((data, index) => <tbody key={index}>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td> <p className="">{data.name}</p> </td>
                                <td> <p className="">{data.dept}</p> </td>
                                <td> <p className="bg-green-800 rounded-2xl px-2 py-1 text-white">{data.checkIn}</p> </td>
                                <td> <p className="bg-red-600 rounded-2xl px-2 py-1 text-white">{data.checkout}</p> </td>
                                <td> <p className="">{data.remake}</p> </td>
                                <td> <p className="">{data.hours}</p> </td>
                                <td> <p className="">{data.overtime}</p> </td>
                                <td> <p className="text-primary w-6 h-6"><EyeIcon /></p> </td>
                            </tr>
                        </tbody>)
                    }

                    
                </table>

                <div className="btn-group mt-6 flex items-center float-right">
                    <ChevronLeftIcon className='w-4 h-4 mr-2 cursor-pointer'/>
                    <button className=" btn-active px-2 bg-slate-200 rounded-lg">1</button>
                    <button className=" px-2 ml-2 bg-slate-200 rounded-lg">2</button>
                    <button className=" px-2 ml-2 bg-slate-200 rounded-lg">3</button>
                    <button className=" px-2 ml-2 bg-slate-200 rounded-lg">4</button>
                    <button className=" px-2 ml-2 bg-slate-200 rounded-lg">5</button>
                    <button className=" px-2 ml-2 bg-slate-200 rounded-lg">6</button>
                    <ChevronRightIcon className='w-4 h-4 ml-2 cursor-pointer'/>
                </div>
            </div>


        </div>
    );
};

export default Attendance;