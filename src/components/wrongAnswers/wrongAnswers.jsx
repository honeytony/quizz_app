import React, { useEffect } from 'react';
import './wrongAnswers.scss';

const WrongAnswers = ({ wrongAnswers = [] }) => {
    return (
        <div className="wrong-answers">
            <h3>Неправильные ответы:</h3>
            <ol>
                {wrongAnswers &&
                    wrongAnswers.map((answ) => {
                        return (
                            <li>
                                <ul>
                                    <li>
                                        {' '}
                                        <strong>Вопрос: </strong>
                                        {answ.title}
                                    </li>
                                    <li>
                                        <span className="wrong"> Ваш ответ: </span>
                                        {answ.text}
                                    </li>
                                    <li>
                                        <span className="correct"> Правильный ответ: </span>
                                        {answ.wrong}
                                    </li>
                                </ul>
                            </li>
                        );
                    })}
            </ol>
        </div>
    );
};

export default WrongAnswers;
