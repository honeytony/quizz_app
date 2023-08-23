import './App.css';
import { useEffect, useState } from 'react';
import { Questions } from './questions.js';
import Questfield from './components/questField/questfield';

function getRandom() {
    return Math.random() - 0.5;
}

function App() {
    const [questions, setQuestions] = useState([]);
    const [countQuest, setCountQuest] = useState(0);
    const [currentQuest, setCurrentQuest] = useState({});
    const [points, setPoints] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const getAnswer = (answer) => {
        if (answer) {
            console.log('Правильно');
        } else {
            console.log('Неправильно');
        }
    };

    const setQuest = (index = countQuest) => {
        console.log('index = ', index);
        setCurrentQuest(questions[index]);
        setCountQuest(countQuest + 1);
        setCorrectAnswer(null);
    };

    useEffect(() => {
        setQuestions(Questions.sort(getRandom));
    }, []);

    useEffect(() => {
        console.log('->>', questions);
        if (questions.length > 0) {
            setQuest(0);
            s;
        }
    }, [questions]);
    return (
        <div className="App">
            <Questfield
                getAnswer={getAnswer}
                currentQuest={currentQuest}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
            />
            <button onClick={() => setQuest()}>Дальше</button>
        </div>
    );
}

export default App;
