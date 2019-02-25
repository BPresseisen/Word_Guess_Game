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
        //      (1.1) All variables are reset from prior play

                var wordText = "";
                var gameWord = "";
                var gameWordPos = null;
                var arrayGW = [];
                var gwLength = 0;
                var guessCount = 0;
                var gameBoard = [];
                var gameBoardStr = "";
                var guessLetter = "";
                var missLetter = [];
                var missLetterStr = "";
                var i = null;
                var j = null;
                var saves = 0
                var hangs = 0
        
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

        //      (2) gamePlay()
        //
        //      when a guessLetter is played, two (2) For...Loops with a nested If...Else to determine if guessletter is in the
        //      missLetter or gameBoard already...if it is in either case, then an alert to inform the player of this event.
                
                alert("This is Hip Hop Hangman. Words are selected at random from titles of my favorite songs. Guess a letter to begin but be mindful of how many guess attempts you have renaining!");

                // document.onkeyup = function uniKeyCode(event) {

                // var j = event.keyCode;

                // //the inputted-key is evaluated to be an alpha key, otherwise an alert is shown to pick another key
                // if (j > 90 || j < 57) {
                //         alert("You pressed an incorrect key. Please choose a letter from a to z.");
                // } else {

                // var guessLetter = event.key.toLowerCase();
                // console.log(guessLetter);

                //     //when a letter that is pressed, for the entirety of the word, check if it matches one of the letters 
                //     var matchLetter = function (randomLetter) {
                //         var letterMatch = false;
        //      if guessLetter 
        //
        //      if the guessLetter <> gameBoard and guessLetter is <> missLetter, then it is a missed guess and two operations
        //      occur: guessCount-1 and the guesslLetter is added (push) into missLetter array. 
        //
        //      the HTML element must be refreshed after the guessLetter push into missLetter so the missed guess appears
        //      onscreen for the user
        //
        //      If guessCount goes to 0 then call gameEnd()
        //       
        //      if guessCount >0 AND guessLetter <> missLetter AND guessLetter <>gameboard, then guessLetter runs through a 
        //      For...Loop with a nested If...Else to determine where it matches a letter in the arrayGW 
        //      
        //      In gameBoard, at the same position-number where guessLetter matches arrayGW, the existing "_" would change to 
        //      the to the matched letter. 
        //  
        //      -->For example, if guessLetter = "o" 
        //
        //      The first match is found at i=4 between arrayGW and guessLetter, gameBoard edits at that postion, as well.
        //      Per the example--> the at position j=4 in gameBoard changes from "_" to "o" 
        //          
        //      The For...Loop continues and finds another match at i=7 and the above gameBoard edit happens again.
        //
        //      In both matches the HTML object with the text for gameBoard would also need refreshing so that onscreen, the 
        //      players sees the following:
        //
        //      _ _ _ _ o _ _ o _ _
        //      
        //      Another guess is tendered and gamePlay() is called and so on and so forth...
        //
        //      (3) gameEnd
        //      
        //      if there are any "_" remaining in gameBoard and guessCount=0 when this fucntion is called, then the game is
        //      over and Hangman count +1
        //  
        //      if there are no "_" (For...Loop) in gameBoard and guessCount>1 then saves +1, play music and prompt used to play
        //      which if ok'd then call gameStart ()
        //  
        //      (4) exIT
        // 
        //       If reply to prompt to play again in gameEnd is FALSE, exit program

