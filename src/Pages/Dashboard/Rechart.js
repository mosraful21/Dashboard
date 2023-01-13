import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Rechart.css';


const data = [
    {
        name: 'Nov1',
        uv: 3400,
    },
    {
        name: 'Nov4',
        uv: 2500,
    },
    {
        name: 'Nov8',
        uv: 3300,
    },
    {
        name: 'Nov12',
        uv: 1200,
    },
    {
        name: 'Nov16',
        uv: 3300,
    },
    {
        name: 'Nov24',
        uv: 2500,
    },
    {
        name: 'Nov28',
        uv: 3500,
    },
    {
        name: 'Nov30',
        uv: 1200,
    },
    {
        name: 'Nov20',
        uv: 4000,
    },
];

const Rechart = () => {
    return (
        <div className='px-6'>
            <div>
                <div className='flex items-center mt-4 mb-2 justify-between'>
                    <div>
                        <button><span className='text-black'>Day</span></button>
                        <button className='ml-3'><span>Month</span></button>
                        <button className='ml-3'><span>Week</span></button>
                        <button className='ml-3'><span>Year</span></button>
                    </div>
                    <button className="btnss mr-5">Report Details</button>
                </div>
                <h2 className='text-4xl font-bold text-black mb-3'><span className='font-mono text-4xl font-bold text-black'>৳</span>4500</h2>
            </div>

            <div style={{ width: '100%', height: 150 }} className="mb-3">
                <ResponsiveContainer>

                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 50,
                            left: 0,
                            bottom: 0,
                        }}>
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Rechart;