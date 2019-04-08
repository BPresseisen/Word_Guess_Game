# Word_Guess_Game aka Hip Hop Hangman

This is Hip Hop Hangman. The developer reserves the right to expect that users are familiar with traditional Hangman. However, it is always best to be prepared and account for any/all use cases. Hence, the "ABOUT THE DESIGN" delves into the particulars of how to play if needed.

In short, words are selected at random from the full titles of my favorite hip hop songs. 
Guess a letter to begin spelling the word but be mindful of how many guess attempts remain!

Future development plans include the following mods:

(1) greater mobile responsiveness
(2) a second part of the game whereas the first part is guessing a word from the full title of the song, the second part--to be developed, tested, and deployed--would then prompt the user to guess the title in full and;
(3) The third part: guessing the year of its release. 
(4) Upon all three parts being correctly guessed, the game would open a YouTube iFrame with a video of the song that would play as the next game begins

Here is the deployed link:

https://bpresseisen.github.io/Word_Guess_Game/

ABOUT THE DESIGN

The workhorses for this deployment are arrays, called functions, for loops and a boolean variable (a checker) which toggles between "true" and "false" when a correct or incorrect letter is keyed. 

First, a word is randomly selected from an array of choices, e.g. "rebel". That word, a string primitive, is converted into an array. An array is also generated representing the dashed, e.g. _ _ _ _ _ gameBoard that will redraw as correct letters are made.

The checker is initialized as "false". A letter is keyed-in, e.g. "y", and it is evaluated against the guessWord. In this example, it does not match any of the indexed positions of the array-version of the guessWord. The checker remains on "false" and to a set of incorrect guesses, the "y" is added. This set of incorrects is drawn to the screen. 

Further, per the length of the random word +5 guesses are given at the start of the game and shown on screen. In this example that would yield 10 guesses for the user. For example, if the word is 3 letters, the user gets 8 chances. After an incorrect guess, the guesses remaining deducts its count by 1 and this change is reflected on screen, as well.

If a correct letter is guessed, such as "e", the checker switches to true and the guessed letter is evaluated against the entir word in a for loop. Only until the entire word is evaluated, will the process and the checker be fully evaluated. In other words and per this example, when the the "e" is evaluated at position 0 of the guessWord array, there's no match because that letter is an "r". 

However, at index positions 1 and 3 there are matches and that would swith the checked to true. This distinction is imperative because as the guessed letter, "e", is a correct match, the game logic should not mistakenly assign "e" to the the incorrect word set for those letters in the guessWord that are not e's (per this example).

Everytime a guess is made and the loop evaluation is complete for the length of the guessWord, the checker switches back to "false" for the next evaluation per a keyed letter. This process is only persisted in the event that there are guesses remaining or in the case that the word is fully and correctly spelled. If either of those situations should arise, there is a separate functions, gameEnd, that is called.
