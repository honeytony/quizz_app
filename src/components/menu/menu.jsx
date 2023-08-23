import React from 'react';
import './menu.scss';

const Menu = ({ setQuest, setMode }) => {
    return (
        <div className="menu">
            <div className="blue-box box"></div>
            <div className="pink-box box"></div>
            <div className="menu-logo"></div>
            <div className="menu-buttons">
                <button
                    onClick={() => {
                        setMode('learn');
                        setQuest(0);
                    }}>
                    Обучение
                </button>
                <button onClick={() => setMode('exam')}>Экзамен</button>
            </div>
        </div>
    );
};

export default Menu;
