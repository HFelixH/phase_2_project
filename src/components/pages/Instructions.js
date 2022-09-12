import React from "react";

function Instructions() {
  return (
    <div className="Instructions">
      <h1>HOW TO PLAY WORDLE</h1>

      <h4>Enter a 5-letter word.</h4>
      <p>
        You'll have 6 chances to guess the 5-letter word, so make every guess
        count! Try using a word that contains many different letters to narrow
        down your future guesses. Type your first guess, and then press Enter to
        see if you've matched any letters.
      </p>

      <h4>Check the tile colors</h4>
      <p>
        After you make a guess, the tile colors will change:
      </p><br/>
      <p>
        A green tile indicates that you've guessed the correct letter in the
        correct place in the word.
      </p><br/>
      <p>
        A yellow tile means you've guessed a letter that's in the word, but
        not in the right spot.
      </p><br/>
      <p>
        A gray tile means that letter is not in the word.
      </p><br/>
      <p>
      </p>

      <h4>Guess another word</h4>
      <p>
        Use the clues you got from your first guess to try again. Remember,
        don't reuse any of the gray letters, as they are definitely not in the
        Wordle.
      </p><br/>
      <p>
        If you correctly guessed a letter at the correct position (a green
        tile), make sure to use that letter at that position in your second
        guess.
      </p><br/>
      <p>
        Letters can appear more than once in the same word.
      </p><br/>

      <h4>When you are ready, click on 'Play Game' tab to begin!</h4>

    </div>
  );
}

export default Instructions;
