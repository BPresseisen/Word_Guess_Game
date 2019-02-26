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

        gameBoard = ["_"];

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

        alert("This is Hip Hop Hangman. Words are selected at random from titles of my favorite songs. Guess a letter to begin but be mindful of how many guess attempts you have remaining!");

}

gameStart();

function gameEnd(){

        if(guessCount=0){

                alert("You hanged an emcee with the mic cord. How many emcees must get dissed?");
                hangs++;
                
        }else{

                alert("Hip Hop Hooray! You saved an emcee from the gallows.");
                saves++;

        }
        gameStart();

};

document.onkeyup = function (event) {

        j = event.keyCode;

        //      the inputted-key is evaluated to be an alpha key, otherwise an alert is shown to pick another key
        if (j > 90 || j < 57){
                alert("You pressed an incorrect key. Please choose a letter from a to z.");
        } else{

                guessLetter = event.key.toLowerCase();
                console.log(guessLetter);
        }

        //      when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 
        for (i = 0; i < arrayGW.length - 1; i++) {
                //  
                //      WHEN guessLetter HAS ALREADY BEEN PLAYED
                //
                for (j = 0; j < gameBoard.length; j++) {

                        if (guessletter == gameBoard[j]) {

                                alert("The entrty is already on the game board. Please choose again.")
                        }

                };
        };
                    
        for (x = 0; x < missLetter.length; x++) {

                if (guessLetter == missLetter[x]) {

                        alert("The entry has already been played and was incorrect. Please choose again.")
                };


        };
         
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
                                  
                        //      OR WHEN IT DOES NOT (missLetter)
                
                        //     ELSE guessLetter is INCORRECT
                } else (guessLetter !== arrayGW[i]){
                          
                        missLetter.push(guessletter & " ");
                        missLetterStr = missLetter.toString;
                        document.getElementById("incorrect_letters").innerHTML = missLetterStr;

                        guessCount--;
                        document.getElementById("guess-remain").innerHTML = guessCount;
                };


                if(guessCount=0 || gameBoard.search("_")==-1) {

                        gameEnd();
                };

        };

};

