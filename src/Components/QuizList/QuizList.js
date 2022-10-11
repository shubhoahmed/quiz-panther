import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Quiz from '../Quiz/Quiz';

const QuizList = () => {
    const quizes = useLoaderData();
    const { data } = quizes;
    const { questions, name } = data;
    console.log(data);
    return (
        <div>
            <h1 className='text-center font-bold text-xl my-4'>Quiz for {name}</h1>
            {
                questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizList;