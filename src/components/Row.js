import React from 'react'

function Row({guess, currentGuess}) {

    if (guess) {
        return(
            <div className="row past">
               {guess.map((l,i) => (
                <div key={i} className={l.color}>{l.key}</div>
               ))} 
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('') // Splits letters into individual array

        // Map letters typed in div and keep empty divs for remaining empty divs for current 5 letter guess
        return(
            <div className="row current">
                {letters.map((letter, i)=> (
                    <div key={i} className="filled">{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((v, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

  return (
    <div className="row"> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

// 5 div in the row represents the 5 characters of a word

export default Row;