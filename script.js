document.getElementById("startGame").onclick = function() {playGame()};


function playGame(){

    let userName = prompt("What's your name?");

    if (userName == false){
        userName = "stranger";
    }

    const message = `Hi ${userName}, these are your scores.`;

    document.getElementById("message-container").innerHTML = message;

    let randomNumber = Math.floor(Math.random(1)*10);
    let number_of_guess = 0;
    const guessLimit = 4;

    let score = 0;
    let highScore = 0;

    while(number_of_guess <= guessLimit){
        let guess = Number(prompt("Enter your guessed number:"));
        number_of_guess++ ;

        if (guess == false){
            alert(`Hi ${userName}, you didn't guess any number. Start again and guess the number.`);
            break;
        }
        
        if (guess == randomNumber){

            alert(`Congartulations ${userName}, You guessed the correct number.`);

            score++;
            highScore = highScore + score;

            document.getElementById("score").innerHTML = score;
            document.getElementById("highScore").innerHTML = highScore;

            break;
        }

        else if (guess != randomNumber && number_of_guess < guessLimit){
            alert(`Wrong guess ${userName}, Try Agian.`);
        }

        else {
            alert(`Game Over ${userName}, You failed!`);
            document.getElementById("score").innerHTML = score;
            document.getElementById("highScore").innerHTML = highScore;
            break;
        }
    }
}