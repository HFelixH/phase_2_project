import { useState } from "react"

const useWordle = (words) => {
    const [turn, setTurn] = useState(0) // keeps track of turn (there are 6x turns for the player to guess)
    const [currentGuess, setCurrentGuess] = useState('') // keeps track of players input for the current turn)
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array - length of array is 6 (6x guesses)
    const [history, setHistory] = useState([]) // each guess will store as a string & handles duplicate guess
    const [isCorrect, setIsCorrect] = useState(false) // test if guess matches the word
    const [usedKeys, setUsedKeys] = useState({}) // Add color to keyboard based guess and the word

    // format a guess into an array of letter objects
    // e.g [{key: 'a', color: 'green'}]
    const formatGuess = () => {
        //console.log('formatting the guess -', currentGuess)
        let wordArray = [...words]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((l, i) => {
            if (wordArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                wordArray[i] = null // once letter match - can't change color (null)
            }
        })

        // find any yellow letters
        formattedGuess.forEach((l, i) => {
            if (wordArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                wordArray[wordArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === words) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistroy) => {
            return [...prevHistroy, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key] // Create a variable to hold the Letter (l.key)

                if (l.color === 'green') {
                    newKeys[l.key] = 'green' // sets letter in keyboard = Green when formatted letter is Green
                    return
                }
                if (l.color === 'yellow' && currentColor !== 'green') { // does not overwrite if letter is green
                    newKeys[l.key] = 'yellow' // sets letter in keyboard = Green when formatted letter is Yellow
                    return
                }
                if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) { // does not overwrite if letter is green or yellow
                    newKeys[l.key] = 'grey' // sets letter in keyboard = Green when formatted letter is Grey
                    return
                }
            })

            return newKeys

        })
        setCurrentGuess('')
    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyUp = ({ key }) => {
        const regex = /^[A-Za-z]$/
        console.log(key)

        if (key === 'Enter') {
            // Only add guess if turn is less than 5
            if (turn > 5) {
                console.log('You used all your guesses')
                return
            }

            // do not allow duplicate
            if (history.includes(currentGuess)) {
                console.log('You already tried that word')
                return
            }

            // check the word must be 5 characters long
            if (currentGuess.length !==5) {
                console.log('Word must be 5 characters long')
                return
            }
            const submitFormattedWord = formatGuess()
            addNewGuess(submitFormattedWord)
            //console.log(submitFormattedWord)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1) // Upon key 'Backspace' - delete the last letter keyed from (prev) previous letter keyed
            })
        }
            //Redjex test - to test boolean value for a key that pressed between A-Z
        if(regex.test(key)) {
            if (currentGuess.length < 5) // Limits word to 5 letters as Word only has 5 letters
                setCurrentGuess((prev) => {
                    return prev + key    // Pass prev = (previous key pressed) and add new key pressed
                })
        }
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp}
}

export default useWordle;