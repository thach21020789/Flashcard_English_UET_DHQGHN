import React, { useEffect, useState } from 'react'
import Wordle from './Wordle'
import MiniGame from '../MiniGame';

function Modal({ isCorrect, turn, solution, solutionInfo}) {
  
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setInterval(() => {
      setTimer(preState => preState - 1);
    }, 1000);
    setTimeout(() => {
      window.location.href = './Wordle'
    }, 15000)
    // return () => clearInterval(timerId);
  },[])
  return (
    <div className='modal'>
        
        {isCorrect && (
            <div className='winModal'>
                <h1>You Win</h1>
                <p className='solution'> Solution: {solution} </p>
                <p className='IPA'> IPA: {solutionInfo.IPA} </p>
                <p className='wordtype'> Wordtype: {solutionInfo.wordtype} </p>
                <p className='definition'> Definition: {solutionInfo.definition} </p>
                <p className='vietnamese'> Vietnamese: {solutionInfo.vietnamese} </p>
                <p>You found the solution in {turn} guesses</p>
                <p className='timer'>Next word in: {timer} seconds</p>
                <br></br>
                <a href="./Wordle" >PlayAgain</a>
            </div>
        )}

        {!isCorrect && (
            <div className='loseModal'>
                <h1>You Loose</h1>
                <p className='solution'>Solution: {solution} </p>
                <p className='IPA'> IPA: {solutionInfo.IPA} </p>
                <p className='wordtype'> Wordtype: {solutionInfo.wordtype} </p>
                <p className='definition'> Definition: {solutionInfo.definition} </p>
                <p className='vietnamese'> Vietnamese: {solutionInfo.vietnamese} </p>
                <p>Better luck next time</p>
                <p className='timer'>Next word in: {timer} seconds</p>
                <br></br>
                <a href="./Wordle">PlayAgain</a>
        </div>
        )}
    </div>
  )
}

export default Modal