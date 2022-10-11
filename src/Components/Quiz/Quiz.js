import React, { useState } from 'react';
import QuizOption from '../QuizOption/QuizOption';

const Quiz = ({ quiz }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const { question, options, correctAnswer, id
    } = quiz;
    return (
        <div className='p-5 border rounded-md lg:w-[60%] mx-auto  mb-5'>

            <div className='flex justify-between'>
                <div
                    dangerouslySetInnerHTML={{ __html: question }}
                    className='font-semibold '
                />
                <button onClick={() => setShowAnswer(!showAnswer)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

            </div>
            <div className=' grid lg:grid-cols-1 grid-cols-1 gap-5 mt-5'>
                {
                    options.map((option, i) => <div key={i} className={`px-3 py-2 rounded-md  ${option === correctAnswer && showAnswer ? 'bg-green-500' : 'bg-blue-300'} w-full`} >
                        <label><input type="radio" name={question} id="" /> {option}</label>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Quiz;