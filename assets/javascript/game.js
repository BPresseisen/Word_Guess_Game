// document.body.innerHTML = randomItem;

//      Four (4) Functions 
//      (1) gameStart() when the game begins, clears variables, establishes the gameWord randomly, and sets-up gameBoard
//      (2) gamePlay( ) once the first guess is made and the subsequent calls per each guess
//      (3) gameEnd() once the word is guessed or the expiration of permitted guesses, the score is tallied, song begins,
//                      and user is promopted to play again--which calls gameStart--or not which calls exIT()
//      
//      

var gameArray = ["microphone", "bells", "zoo", "fiend", "pause", "manifest", "protect", "funk", "award",
"buddy", "business", "chorus", "wrath", "express", "infinity", "arena", "junkies", "paper",
"hypnotize", "lesson", "vivrant", "control", "songs", "taxing", "riches", "butcher",
"symphony", "risk", "criminal", "philosophy", "bridge"];

var gameWord = "";
var arrayGW = [];
var gwLength = 0;
var guessCount = 0;
var gameBoard = []
var gameBoardStr = "";
var guessLetter = "";
var missLetter = [];
var missLetterStr = "";
var saves = 0;
var hangs = 0;

function gameStart() {

        //      (1.1) Set gameWord from gameArray

        gameWord = gameArray[Math.floor(Math.random() * gameArray.length)];

        console.log(gameWord);

        //      (1.2) Run Split Method 
        //      After variarbles are reset, change gameword into an array, arrayGW, using the split. method to separate 
        //      each letter of gameWord by a comma

        arrayGW = gameWord.split("");
        console.log(arrayGW);

        //      
        //      (1.3) Find Length of arrayGW and defne length as an integer, gwLength

        gwLength = arrayGW.length;
        guessCount = gwLength + 5;
        document.getElementById("guess-remain").innerHTML = guessCount;

        //      (1.4) Create gameBoard

        gameBoard = ["_"]

        for (var i = 0; i < gwLength - 1; i++) {

                gameBoard.push("_");

        }

        var gameBoardStr = gameBoard.toString();

        for (var i = 0; i < gwLength - 1; i++) {

                gameBoardStr = gameBoardStr.replace(",", " ");

        }

        console.log(gameBoard);
        console.log(gameBoardStr);

        document.getElementById("correct_letters").innerHTML = gameBoardStr;
        document.getElementById("guess-remain").innerHTML = guessCount;

        alert("This is Hip Hop Hangman. Words are selected at random from titles of my favorite songs. Guess a letter to begin but be mindful of how many guess attempts you have renaining!");

}

gameStart();

document.onkeyup = function (event) {

        var j = event.keyCode;

        //      the inputted-key is evaluated to be an alpha key, otherwise an alert is shown to pick another key
        if (j > 90 || j < 57) {
                alert("You pressed an incorrect key. Please choose a letter from a to z.");
        } else {

                var guessLetter = event.key.toLowerCase()
                console.log(guessLetter);
        }

        //      when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 
        for (i = 0; i < arrayGW.length - 1; i++) {
                //  
                //      WHEN guessLetter HAS ALREADY BEEN PLAYED
                //
                for (j = 0; j < gameBoard.length; j++) {

                        if (guessletter == gameBoard[i]) {

                                alert("The entrty is already on the game board. Please choose again.")
                        }

                };
        };
        //              
        for (x = 0; x < missLetter.length; x++) {

                if (guessLetter == missLetter[i]) {

                        alert("The entry has already been played and was incorrect. Please choose again.")
                };


        };
        //      
        //      WHEN guessLetter EQUALS AN INDEXED VALUE IN arrayGW
        //      (a) perform replace method on gameBoard to swap the existing "_" in the matching indexed spot of the 
        //      array AND (b) programmatically edit the HTML element by ID to reflect the updated missing/showing on 
        //      the gameBoard
        //
        for (i = 0; i < arrayGW.length - 1; i++) {

                //      guessLetter is CORRECT
                if (guessLetter == arrayGW[i]) {

                        gameBoard.splice(i, 0, guessLetter);
                        gameBoardStr = gameBoard.toString();
                        console.log(gameBoard);
                        console.log(gameBoardStr);

                        document.getElementById("correct_letters").innerHTML = gameBoardStr;
                        //                      
                        //      OR WHEN IT DOES NOT (missLetter)
                        //
                        //     ELSE guessLetter is INCORRECT
                } else (guessLetter !== arrayGW[i]) {
                          
                        missLetter.push(guessletter & " ")
                        missLetterStr = missLetters.toString
                        document.getElementById("incorrect_letters").innerHTML = missLetterStr;

                        guessCount--
                        document.getElementById("guess-remain").innerHTML = guessCount
                };
        };
        //      
        //              
        //      Need more if(){}else(){} statements here to accomplish the follwing:
        //
        //              (1) if (guessCount goes to 0) then call gameEnd(){}
        //              if(guessCount=0){
        //
        //                 gameEnd()
        //
        //              }
        //              (2) else(most recent guessLetter completes the word, call gameEnd()){}
        //
        //              (3) else(guess again-->call the function gamePlay() until (1) or (2) are satisfied){}
        //       
        //
        //      (3) gameEnd
        //
        // function gameEnd()
        //      
        //      if there are any "_" remaining in gameBoard and guessCount=0 when this function is called, then the 
        //      game is over and hangs count +1 and update the HTML element by ID for "Hangings" by 1 
        //  
        //      else there are no "_" in gameBoard and guessCount>0 then saves +1, update the HTML element by ID 
        //      for "Gallows Saves" by 1, prompt with congratulations
        //      
        //      -->with either outcome from the above if/else-->prompt user to play again and if the reply is True, 
        //      then call function gameStart()

        //      document.onkeyup = function gameStart(event)) {}

}

