document.getElementById("startGame").onclick = function() {playGame()};

function playGame(){

    let randomNumber = Math.floor(Math.random(0)*10);
    let number_of_guess = 0;
    const guessLimit = 4;

    let score = 0;
    let highScore = 0;

    while(number_of_guess <= guessLimit){
        let guess = Number(prompt("Enter your guessed number:"));
        number_of_guess++ ;
        
        if (guess == randomNumber){

            alert("Congartulations, You guessed the correct number.");

            score++;
            highScore = highScore + score;

            break;
        }

        else if (guess != randomNumber && number_of_guess < guessLimit){
            alert("Wrong guess, Try Agian.");
        }

        else {
            alert("Game Over, You failed!");
            break;
        }
    }
}