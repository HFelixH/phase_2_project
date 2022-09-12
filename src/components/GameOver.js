import React from 'react'

function GameOver({isCorrect, turn, words}) {
  return (
    <div className="gameOver">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className="words">{words}</p>
                <p>You guessed the word in {turn} tries.</p>
                <p>Refresh to play again!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lose!</h1>
                <p>The word was...</p>
                <p className="words">{words}</p>
                <p>Refresh to play again!</p>
            </div>
        )}
    </div>
  )
}

export default GameOver;