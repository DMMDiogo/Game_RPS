



  const object = ["paper", "scissor", "rock"];
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorButton = document.getElementById("scissor");


  let userChoice;
  

  function getComputerChoice() {
    let numberObject = Math.floor(Math.random() * 3);
    return object[numberObject];
  }
  
  scissorButton.addEventListener('click', () => {
    const userChoice = "scissor";
    console.log(`You chose: ${userChoice}`);
    const result = playRound(getComputerChoice(), userChoice);
    console.log(result);
  
    const content = document.querySelector(".result");
    const header = content.querySelector("h3");
    header && header.remove();
  
    const newHeader = document.createElement("h3");
    newHeader.textContent = result;
    content.appendChild(newHeader);
  });
  
  rockButton.addEventListener('click', () => {

    const userChoice = "rock";
    console.log(`You chose: ${userChoice}`);
    const result = playRound(getComputerChoice(), userChoice);
    console.log(result);
  
    const content = document.querySelector(".result");
    const header = content.querySelector("h3");
    header && header.remove();
  
    const newHeader = document.createElement("h3");
    newHeader.textContent = result;
    content.appendChild(newHeader);

    const buttons = document.querySelectorAll('.selectable');

  });
  
  paperButton.addEventListener('click', () => {
    const userChoice = "paper";
    console.log(`You chose: ${userChoice}`);
    const result = playRound(getComputerChoice(), userChoice);
    console.log(result);
  
    const content = document.querySelector(".result");
    const header = content.querySelector("h3");
    header && header.remove();
  
    const newHeader = document.createElement("h3");
    newHeader.textContent = result;
    content.appendChild(newHeader);
  });
  

function playRound(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    console.log("It's a tie");
    return "It's a tie";
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    console.log("You win Human");
    return "You Win Human";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    console.log("You win Human");
    return "You Win Human";
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    console.log("You Win Human");
    return "You Win Human";
  } else {
    console.log("The Computer Wins")
    return "The Computer Wins";
  }
}



  function game () {

    let userScore = 0;
    let computerScore = 0;

    

    for(let round = 1 ; round <= 5; round ++){
      const playerSelection = userChoice;
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

