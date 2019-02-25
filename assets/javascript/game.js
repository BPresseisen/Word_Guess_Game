        // document.body.innerHTML = randomItem;

        //      Four (4) Functions 
        //      (1) gameStart() when the game begins, clears variables, establishes the gameWord randomly, and sets-up gameBoard
        //      (2) gamePlay( ) once the first guess is made and the subsequent calls per each guess
        //      (3) gameEnd() once the word is guessed or the expiration of permitted guesses, the score is tallied, song begins,
        //                      and user is promopted to play again--which calls gameStart--or not which calls exIT()
        //      (4) exIT
        //      
        //      variables are:
        //      
        //      preGameHitKey: a global variable to declare it is false
        //      wordText: string. a placeholder variable to start the game and capture whichever key is pressed
        //      gameWord: string. the word being guesses
        //      gameWordPos: integer. the position in the arrayGW where there's a match with the guessLetter
        //      arrayGW : array. gameWord as a converted array
        //      gwLength: integer. the length of arrayGW
        //      guessCount: integer. the number of guesses allotted=gwLength+5
        //      gameBoard: array. the array at the outset of the game is empty. per the gamePlay function it is dynamically 
        //                          created per the gwLength. It appears at the outset as a collectiono of "_" per gwLength
        //                           and then dynamically changes on guessed if there are matches with arrayGW
        //
        //      guessLetter: variant. the letter guessed after the gamePlay() is called and completed it is changed to empty
        //      missLetter: variant. the collection of letters that missed on guesses
        //      i : integer. used in For...Loops
        //      j : integer. used in For...Loops
        //      saves: integer. counter of saves per correct guessting of the word
        //      hangMan: integer. counter of losses per not guessing of the word...the man is hanged
        //      
        //
        //      (1.1) function gameStart which begins with delaring/initializing all variables as reset from prior game

                function gameStart(){

                var wordText = "";
                var gameWord = "";
                var gameWordPos = null;
                var arrayGW = [];
                var gwLength = 0;
                var guessCount = 0;
                var gameBoard = [])
                var gameBoardStr = "";
                var guessLetter = "";
                var missLetter = [];
                var missLetterStr = "";
                var i = null;
                var j = null;
                var x = null;
 
        //      
                if(typeof(saves) != "undefined" && typeof(hangs) !="undefined"){
                
                // For the very first time the game starts--set saves to 0 otherwise, preserve saves and hangs above
                else()
                
                        var saves = 0
                        var hangs = 0
                }
        
        //      
        //      (1.2) The collection of Game words
        //      
                var gameArray = ["microphone","bells","zoo","fiend","pause", "manifest","protect","funk","award",
                            "buddy", "business","chorus","wrath","express","infinity", "arena","junkies","paper",
                            "hypnotize","lesson","vivrant","control","songs","taxing", "riches","butcher",
                            "symphony","risk", "criminal", "philosophy", "bridge"];

        //      (1.3) Set gameWord from gameArray
               
                var gameWord = gameArray[Math.floor(Math.random()*gameArray.length)]; 

                console.log(gameWord);
                
        //      (1.4) Run Split Method 
        //      After variarbles are reset, change gameword into an array, arrayGW, using the split. method to separate 
        //      each letter of gameWord by a comma
                
                var arrayGW = gameWord.split("");
                console.log(arrayGW);
               
        //      
        //      (1.5) Find Length of arrayGW and defne length as an integer, gwLength
                
                var gwLength = arrayGW.length;
                var guessCount = gwLength+5;
                document.getElementById("guess-remain").innerHTML=guessCount;

        //      (1.6) Create gameBoard
                
                var gameBoard = ["_"]

                for(var i=0; i<gwLength-1;i++){

                        gameBoard.push("_");

                }       

                var gameBoardStr = gameBoard.toString();

                for(var i=0; i<gwLength-1;i++){

                        var gameBoardStr = gameBoardStr.replace(","," ");

                }

                console.log(gameBoard);
                console.log(gameBoardStr);

                document.getElementById("correct_letters").innerHTML=gameBoardStr;
                // document.getElementById("guess-remain").innerHTML=guessCount;

                }

        //      (2) gamePlay()
        //
                
                alert("This is Hip Hop Hangman. Words are selected at random from titles of my favorite songs. Guess a letter to begin but be mindful of how many guess attempts you have renaining!");

                // document.onkeyup = function uniKeyCode(event) {

                // var j = event.keyCode;

                // //the inputted-key is evaluated to be an alpha key, otherwise an alert is shown to pick another key
                // if (j > 90 || j < 57) {
                //         alert("You pressed an incorrect key. Please choose a letter from a to z.");
                // } else {

                // var guessLetter = event.key.toLowerCase());
                // console.log(guessLetter);

        //      when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 
        //      for(i=0; i<arrayGW.length-1;i++){
        //  
        //      WHEN guessLetter HAS ALREADY BEEN PLAYED
        //
        //      for(j=0; x<gameBoard.length; j++){
        //              
        //              if(guessletter == gameBoard[i]){
        //                      
        //                      alert("The entrty is already on the game board. Please choose again.")};      
        //
        //              }
        //              
        //      for(x=0; x<missLetter.length; x++){
        //                      
        //      --> need to develop an in-game penalty of -1 guessCount when guessing the same letter 3x or more times
        //              if(guessLetter == missLetter[i]){
        //        
        //                      alert("The entry has already been played and was incorrect. Please choose again.")};
        //      
        //
        //      }
        //      
        //      WHEN guessLetter EQUALS AN INDEXED VALUE IN arrayGW
        //      (a) perform replace method on gameBoard to swap the existing "_" in the matching indexed spot of the 
        //      array AND (b) programmatically edit the HTML element by ID to reflect the updated missing/showing on 
        //      the gameBoard
        //
        //      for(i=0; i<arrayGW.length-1;i++){
        //              
        //              guessLetter is CORRECT
        //              if(guessLetter == arrayGW[i]){

        //                      gameBoard.splice(i,0,guessLetter)
        //                      gameBoardStr = gameBoard.toString();
        //                      console.log(gameBoard);
        //                      console.log(gameBoardStr);
        //
        //                      document.getElementById("correct_letters").innerHTML=gameBoardStr;
        //      
        //      OR WHEN IT DOES NOT (missLetter)
        //      (a) add letter to incorrect letters array, (b) programmatically change the HTML element by ID
        //       to reflect the updated list of incorrect letters and; (c) reduce the guessCount by 1
        //
        //              ELSE guessLetter is INCORRECT
        //              }else(guessLetter <> arrayGW[i]){
        //                      
        //                      missLetter.push(guessletter & " ")
        //                      missLetterStr = missLetters.toString
        //                      document.getElementById("incorrect_letters").innerHTML=missLetterStr;
        //                      
        //                      guessCount--
        //                      document.getElementById("guess-remain").innerHTML=guessCount
        //              }
        //      };
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
        //      if there are any "_" remaining in gameBoard and guessCount=0 when this function is called, then the 
        //      game is over and hangs count +1, then update the HTML element by ID for "Hangings" by 1 
        //  
        //      else there are no "_" in gameBoard and guessCount>0 then saves +1, update the HTML element by ID 
        //      for "Gallows Saves" by 1, prompt with congratulations
        //      
        //      -->with either outcome above in gameEnd-->prompt user to play again and if the reply is True, 
        //      then call function gameStart()


