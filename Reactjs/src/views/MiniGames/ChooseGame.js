import React from "react";
import './_chooseGame.scss'
import gamewordle from '../assets/img/gamewordle.jpg'
import gamequiz from '../assets/img/gamequiz.jpg'
import { Helmet } from 'react-helmet';


const ChooseGame = () => (
    <>
        <div>
            <Helmet><title>MiniGame</title></Helmet>
            <div className="choose-game">
                <a href="/MiniGame/Wordle" className="auth-buttons" >
                    <img alt='game-picture' src={gamewordle}></img>
                </a>
                <a href="/MiniGame/Quiz" className="auth-buttons" >
                    <img alt='game-picture' src={gamequiz}></img>
                </a>
            </div>
        </div>
    </>
);

export default ChooseGame;