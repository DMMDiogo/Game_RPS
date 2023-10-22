const object = ["paper", "scissor", "rock"];

 

function getComputerChoice() {
    let numberObject = Math.floor(Math.random() * 3);
  return object[numberObject];
}

 const userInput = prompt("Choose your Warrior");
 const userChoice = userInput.toLowerCase();

 const computerChoice = getComputerChoice();


 function playRound(computerChoice, userChoice) {

  

    if (computerChoice === userChoice) {
        console.log("It's a tie");
        return "It's a tie";
      
    }

   else if (computerChoice === "paper" && userChoice === "scissor") {
        
        console.log("You win Human");
        return "You Win Human";
    }

    else if (computerChoice === "rock" && userChoice === "paper") {
        
        console.log("You win Human");
        return "You Win Human";
    }

    else if (computerChoice === "scissor" && userChoice === "rock") {

      console.log("You Win Human");
      return "You Win Human";
    }
    
    else {
      console.log("The Computer Wins")
      return "The Computer Wins";
    }
  
  }


  function game () {

    let userScore = 0;
    let computerScore = 0;

    

    for(let round = 1 ; round <= 5; round ++){
      const playerSelection = prompt("Enter your Warrior");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${playRound(playerSelection, computerChoice)}`);

        if( result === "The Computer Wins"){
          computerScore ++;
        }

        else { userScore++;}
    }

    if (userScore > computerScore) {
      console.log("You Win the Game!");
  } else if (playerScore < computerScore) {
      console.log("Computer Wins the Game!");
  } else {
      console.log("It's a Tie Game!");
  }
}



  
    
  




  console.log("Computer has chosen" + " " + computerChoice );

 console.log("Human has chosen" + " " + userChoice );

 console.log(playRound(computerChoice, userChoice));

 console.log(game())