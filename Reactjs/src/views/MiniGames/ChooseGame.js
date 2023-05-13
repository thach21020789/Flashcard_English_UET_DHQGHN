import React from "react";
import { Link } from 'react-router-dom';
import './_chooseGame.scss'
import gamewordle from '../assets/img/gamewordle.jpg'
import gamequiz from '../assets/img/gamequiz.jpg'

const ChooseGame = () => (
    <>
        <div className="choose-game">
            <a href="/MiniGame/Wordle" className="auth-buttons" >
                <img alt='game-picture' src={gamewordle}></img>
            </a>
            <a href="/MiniGame/Quiz" className="auth-buttons" >
                <img alt='game-picture' src={gamequiz}></img>
            </a>
        </div>
    </>
);

export default ChooseGame;