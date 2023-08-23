import React from 'react';
import Question from '../question/question';

const Questfield = ({ currentQuest, getAnswer, correctAnswer, setCorrectAnswer }) => {
    return (
        <div className="quest-field">
            <Question
                getAnswer={getAnswer}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                question={currentQuest}
            />
        </div>
    );
};

export default Questfield;
