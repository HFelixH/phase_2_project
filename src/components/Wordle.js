import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import GameOver from './GameOver'
import Grid from './Grid'
import Keypad from './Keypad'

function Wordle({ words }) {
  const {currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys} = useWordle(words)
  const [showGameOver, setShowGameOver] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp) // Listen for every time player presses key board

    // To Win
    if (isCorrect) {
      //console.log('Congrats you Win') 
      setTimeout(() => setShowGameOver(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    // To Lose
    if (turn > 5) {
      //console.log('Out of Guesses! You lose!')
      setTimeout(() => setShowGameOver(true), 2000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    return () => window.removeEventListener('keyup', handleKeyUp) // Remove current eventListener *reset useEffect*
  }, [handleKeyUp, isCorrect, turn])  

  // Test guesses
  useEffect (() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>   
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
        {showGameOver && <GameOver isCorrect={isCorrect} turn={turn} words={words}/>}
    </div> 
  )
}

export default Wordle;


// To test words and current guess
/* <div>Word - {words} </div>
<div>current guess - {currentGuess}</div> */
