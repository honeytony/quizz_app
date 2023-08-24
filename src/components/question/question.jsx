import React, { memo, useEffect, useState } from 'react';
import { getRandom, prepareAnswers, prepareQuestions } from '../../utils/utils';
import './question.scss';
//todo сделать рандомизацию вопросов

const Question = ({
    answer,
    setQuest,
    countQuest,
    question,
    setAnswer,
    correctAnswer,
    setCorrectAnswer,
    wrongAnswers,
    setWrongAnswers,
}) => {
    const [newQuestion, setNewQuestion] = useState(question);
    const [newAnswers, setNewAnswers] = useState(question.answers);

    useEffect(() => {
        setNewQuestion(prepareQuestions(question));
        setNewAnswers(prepareAnswers(question.answers));
    }, [question.answers]);

    return (
        <div className="question">
            <h2 className="question-header">
                <span className="question-header-number">{countQuest}</span> {question.title}
            </h2>
            <p className="description">{question.description}</p>
            <div className="answers">
                <ol>
                    {question &&
                        newAnswers.map((el, index) => {
                            return (
                                <li key={index}>
                                    <button
                                        className={
                                            el.choosed
                                                ? el.correct
                                                    ? 'correct-btn'
                                                    : 'wrong-btn'
                                                : null
                                        }
                                        onClick={(e) => {
                                            el.choosed = true;
                                            if (!el.correct) {
                                                el.title = question.title;
                                                el.wrong = correctAnswer;
                                                setWrongAnswers((prev) => [...prev, el]);
                                            }
                                            setAnswer(el.correct);
                                        }}>
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

// const Question = ({
//     answer,
//     setQuest,
//     countQuest,
//     question,
//     setAnswer,
//     correctAnswer,
//     setCorrectAnswer,
// }) => {
//     return (
//         <div className="question">
//             <h2 className="question-header">
//                 <span className="question-header-number">{countQuest}</span> {question.title}
//             </h2>
//             <p className="description">{question.description}</p>
//             <div className="answers">
//                 <ol>
//                     {question.answers &&
//                         question.answers.sort(getRandom).map((el, index) => {
//                             if (!correctAnswer && el.correct) {
//                             }
//                             return (
//                                 <li key={index}>
//                                     <button onClick={(e) => setAnswer(el.correct)}>
//                                         {el.text}
//                                     </button>
//                                 </li>
//                             );
//                         })}
//                 </ol>
//             </div>
//             {answer === true ? (
//                 <div className="correct">
//                     <h3 className="title">Верно!</h3>
//                     <button onClick={() => setQuest()}>Далее</button>
//                 </div>
//             ) : null}
//             {answer === false ? (
//                 <div className="wrong ">
//                     <h3 className="title">Неверно!</h3> <span> Правильный ответ:</span>
//                     {correctAnswer}
//                     <button onClick={() => setQuest()}>Далее</button>
//                 </div>
//             ) : null}
//         </div>
//     );
// };

export default Question;
