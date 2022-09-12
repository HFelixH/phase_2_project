import React from 'react'
import Row from './Row'

function Grid({currentGuess, guesses, turn}) {
    // Pass currentGuess into the Row based on the turn index
    // Return a Row component and pass through the current guess
  return (
    <div>
        {guesses.map((g, i) => {
            if (turn === i) {
                return <Row key={i} currentGuess={currentGuess}/>
            }
            return <Row key={i} guess={g} />
        })}
    </div>
  )
}

export default Grid;