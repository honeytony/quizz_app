import { useEffect, useState } from 'react';
import { Questions } from './questions.js';
import Questfield from './components/questField/questfield';
import Menu from './components/menu/menu';
import { getRandom, prepareQuestions } from './utils/utils.js';
import Result from './components/result/result.jsx';

function App() {
    const [questions, setQuestions] = useState([]);
    const [mode, setMode] = useState('');
    const [countQuest, setCountQuest] = useState(0);
    const [currentQuest, setCurrentQuest] = useState({});
    const [points, setPoints] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [answer, setAnswer] = useState();
    const [canAnswer, setCanAnswer] = useState(true);
    const [wrongAnswers, setWrongAnswers] = useState([]);
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
            questions[index].answers.sort(getRandom).forEach((el) => {
                if (el.correct) setCorrectAnswer(el.text);
            });
        }
    };
    const handleReset = () => {
        setMode('menu');
        setQuestions(Questions.sort(getRandom));
        setWrongAnswers([]);
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
                <div className="App">
                    <Result
                        points={(points / questions.length) * 100}
                        questlen={questions.length}
                        wrongAnswers={wrongAnswers}
                        handleReset={handleReset}
                    />
                </div>
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
                        wrongAnswers={wrongAnswers}
                        setWrongAnswers={setWrongAnswers}
                    />
                </div>
            );

        default:
            return <Menu setQuest={setQuest} setMode={setMode} />;
    }
}

export default App;
