import React, { useEffect, useState } from 'react';
import './question.scss';

const Question = ({
    answer,
    setQuest,
    countQuest,
    question,
    setAnswer,
    correctAnswer,
    setCorrectAnswer,
}) => {
    return (
        <div className="question">
            <h2 className="question-header">
                <span className="question-header-number">{countQuest}</span> {question.title}
            </h2>
            <p className="description">{question.description}</p>
            <div className="answers">
                <ol>
                    {question.answers &&
                        question.answers.map((el, index) => {
                            if (!correctAnswer && el.correct) {
                            }
                            return (
                                <li key={index}>
                                    <button onClick={(e) => setAnswer(el.correct)}>
                                        {el.text}
                                    </button>
                                </li>
                            );
                        })}
                </ol>
            </div>
            {answer === true ? (
                <div className="correct">
                    <h3 className="title">Верно!</h3>
                    <button onClick={() => setQuest()}>Далее</button>
                </div>
            ) : null}
            {answer === false ? (
                <div className="wrong ">
                    <h3 className="title">Неверно!</h3> <span> Правильный ответ:</span>
                    {correctAnswer}
                    <button onClick={() => setQuest()}>Далее</button>
                </div>
            ) : null}
        </div>
    );
};

export default Question;
