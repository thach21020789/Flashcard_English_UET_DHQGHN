/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import './GameStyle/MiniGame.scss';
import Board from './Board';
import Keyboard from "./Keyboard";
import { boardDefault, generateWordSet } from "./Word";
import { createContext, useState } from "react";
import GameOver from "./GameOver";

export const AppContext = createContext();

function MiniGame() {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    // const correctWord = "RIGHT";
    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todayWord);
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) {
            return;
        }
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
    };
    const onEnter = () => {
        if (currAttempt.letterPos !== 5) return;
        let currWord = "";
        for (let i = 0; i<5; i++) {
            currWord += board[currAttempt.attempt][i];
        }
        // if (wordSet.has(currWord.toLowerCase())) {
        //     setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
        // } else {
        //     // alert("Word Not Found!");
        // }
        setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true});
        }

        if (currAttempt.attempt === 5) {
            setGameOver({ gameOver: true, guessedWord: false});
        }

    };
    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
    };

    return(
        <div className="MiniGames">
            <nav>
                <h1>Wordle</h1>
            </nav>

            <AppContext.Provider value={{
                board,
                setBoard,
                currAttempt,
                setCurrAttempt,
                onSelectLetter,
                onDelete,
                onEnter,
                correctWord,
                disabledLetters,
                setDisabledLetters,
                gameOver,
                setGameOver,
                }}>
                <div className="game">
                    <Board />
                    {gameOver.gameOver ? <GameOver /> : <Keyboard />}
                </div>
            </AppContext.Provider>
            
        </div>

    )
    
}

export default MiniGame;
