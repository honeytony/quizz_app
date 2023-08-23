import React, { useEffect, useState } from 'react';

const Question = ({ question, getAnswer, correctAnswer, setCorrectAnswer }) => {
    useEffect(() => {
        console.log('quest->', question);
    }, [question]);
    return (
        <div className="question">
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <div className="answers">
                {question.answers &&
                    question.answers.map((el) => {
                        if (!correctAnswer && el.correct) {
                            console.log('corAn ', el.text);
                            setCorrectAnswer(el.text);
                        }
                        return <button onClick={() => getAnswer(el.correct)}>{el.text}</button>;
                    })}
            </div>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default Question;
