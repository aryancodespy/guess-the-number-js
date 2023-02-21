document.getElementById("startGame").onclick = function() {playGame()};

let userName = prompt("What's your name?");


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

            alert(`Congartulations ${userName}, You guessed the correct number.`);

            score++;
            highScore = highScore + score;

            document.getElementById("score").innerHTML = score;
            document.getElementById("highScore").innerHTML = highScore;

            break;
        }

        else if (guess != randomNumber && number_of_guess < guessLimit){
            alert("Wrong guess, Try Agian.");
        }

        else {
            alert("Game Over, You failed!");
            document.getElementById("score").innerHTML = score;
            document.getElementById("highScore").innerHTML = highScore;
            break;
        }
    }
}