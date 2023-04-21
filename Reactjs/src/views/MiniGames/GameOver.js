import React, {useContext} from 'react'
import { AppContext } from './MiniGame'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext); 

  return (
    <div className='gameOver'>
        <h3>
            {gameOver.guessedWord ? "You are Correct" : "You Failed"}
        </h3>
        <h1>
            Correct Word is: {correctWord}
        </h1>
        {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver