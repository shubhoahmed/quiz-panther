import React from 'react';
import { Link } from 'react-router-dom'

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;
    return (
        <div className='p-5 border rounded-md bg-slate-300'>
            <img src={logo} alt="" />
            <h1 className='font-bold text-xl mt-3'>Name: {name}</h1>
            <p className='mt-2'>Total Quiz: {total}</p>
            <Link to={`/quiz/${id}`} className='px-7 py-2 w-full bg-blue-400 text-white rounded-md mt-2 block text-center'>Start Quiz</Link>
        </div >
    );
};

export default Topic;