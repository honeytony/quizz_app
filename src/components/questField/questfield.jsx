import React from 'react';
import Question from '../question/question';
import './questfield.scss';

const Questfield = ({
    setQuest,
    answer,
    countQuest,
    currentQuest,
    setAnswer,
    correctAnswer,
    setCorrectAnswer,
    wrongAnswers,
    setWrongAnswers,
}) => {
    return (
        <div className="quest-field">
            {countQuest % 2 ? (
                <div className="blue-box box"></div>
            ) : (
                <div className="pink-box box"></div>
            )}
            <Question
                countQuest={countQuest}
                setAnswer={setAnswer}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                question={currentQuest}
                answer={answer}
                setQuest={setQuest}
                wrongAnswers={wrongAnswers}
                setWrongAnswers={setWrongAnswers}
            />
        </div>
    );
};

export default Questfield;
