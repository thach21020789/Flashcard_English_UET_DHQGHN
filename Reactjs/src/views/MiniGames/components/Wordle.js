import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

function Wordle( {solution}) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys, handleKeyDown} = useWordle(solution);
    const [showModal, setShowModal] = useState(false); 

    useEffect (() => {
      window.addEventListener('keyup', handleKeyDown)
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {
          setTimeout(() => {
            setShowModal(true, 10000)
          })
          window.removeEventListener('keyup', handleKeyup);
        }

        if (turn > 5 && !isCorrect) {
            setTimeout(() => {
            setShowModal(true, 200)
          }) 
            window.removeEventListener('keyup', handleKeyup);
        }
        
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn, handleKeyDown]);

   
  return (
    <>
        <div>Current Guess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keyboard usedKeys={usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </>
  )
}

export default Wordle