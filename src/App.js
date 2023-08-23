import { useEffect, useState } from 'react';
import { Questions } from './questions.js';
import Questfield from './components/questField/questfield';
import Menu from './components/menu/menu';

function getRandom() {
    return Math.random() - 0.5;
}

function App() {
    const [questions, setQuestions] = useState([]);
    const [mode, setMode] = useState('');
    const [countQuest, setCountQuest] = useState(0);
    const [currentQuest, setCurrentQuest] = useState({});
    const [points, setPoints] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answer, setAnswer] = useState(undefined);
    const [canAnswer, setCanAnswer] = useState(true);

    const getAnswer = (answer) => {
        if (canAnswer) {
            if (answer) {
                setAnswer(true);
                setPoints(points + 1);
            } else {
                setAnswer(false);
            }
            setCanAnswer(false);
        }
    };

    const setQuest = (index = countQuest) => {
        setCanAnswer(true);

        if (countQuest === questions.length) {
            setMode('learn-final');
        } else {
            setCurrentQuest(questions[index]);
            setCountQuest(countQuest + 1);

            setAnswer(undefined);

            questions[index].answers.forEach((el) => {
                if (el.correct) setCorrectAnswer(el.text);
            });
        }
    };
    const handleReset = () => {
        setMode('menu');
        setQuestions(Questions.sort(getRandom));
        setCountQuest(0);
        setPoints(0);
    };

    useEffect(() => {
        setQuestions(Questions.sort(getRandom));
    }, []);

    switch (mode) {
        case 'exam':
            return (
                <>
                    exam{' '}
                    <button className="link" onClick={() => handleReset()}>
                        В меню
                    </button>
                </>
            );
        case 'learn-final':
            return (
                <>
                    Тест пройден. Результат - {(points / questions.length) * 100}%
                    <button className="link" onClick={() => handleReset()}>
                        В меню
                    </button>
                </>
            );
        case 'learn':
            return (
                <div className="App">
                    <Questfield
                        countQuest={countQuest}
                        answer={answer}
                        setAnswer={getAnswer}
                        currentQuest={currentQuest}
                        correctAnswer={correctAnswer}
                        setCorrectAnswer={setCorrectAnswer}
                        setQuest={setQuest}
                    />
                </div>
            );

        default:
            return <Menu setQuest={setQuest} setMode={setMode} />;
    }
}

export default App;
