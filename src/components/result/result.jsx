import React, { useState } from 'react';
import WrongAnswers from '../wrongAnswers/wrongAnswers';
import './result.scss';
const Result = ({ points, wrongAnswers = [], handleReset }) => {
    const [score, setScore] = useState(Math.floor(points));
    return (
        <div className="result-container">
            <div className="blue-box box"></div>
            <div className="pink-box box"></div>
            <div className="result">
                <h2>
                    Тест {score < 80 ? ' завален.' : ' пройден'}
                    <br />
                    Результат - {Math.floor(points)}%
                </h2>
                {wrongAnswers.length ? <WrongAnswers wrongAnswers={wrongAnswers} /> : null}
                <button className="link" onClick={() => handleReset()}>
                    В меню
                </button>
            </div>
        </div>
    );
};

export default Result;
