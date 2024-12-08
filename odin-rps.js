//generates computer choice for a round
function getComputerChoice ()
{
    //assigns a random number between 1-9 (3 values for each option)
    let randomNum = Math.floor(Math.random() * 10);
    
    //rock if random number is 1-3
    if (randomNum <= 3)
    {
        return "rock";
    }
    //paper if random number is 4-6
    else if (randomNum <= 6)
    {
        return "paper";
    }
    //scissors elsewise 
    else 
    {
        return "scissors";
    }
}

function playGame()
{
    //function to play single round of the game
    function playRound(humanChoice, computerChoice)
    {
        const divNode = document.querySelector("div");
        const roundResultNode = document.createElement("div");
        //string to display outcome each round
        let message = "";

        //checks matchup on human choice of rock
        if (humanChoice == "rock")
        {
            //losing condition
            if (computerChoice == "paper")
            {
                computerScore++;
                message = "You lose! The paper beat your rock."
            }
            //winning condition
            else if (computerChoice == "scissors")
            {
                humanScore++;
                message = "You win! Your rock beat the scissors."
            }
            //tie
            else 
            {
                message = "It's a tie! Two rocks!"
            }
        }        

        //checks matchup on human choice of paper
        else if (humanChoice == "paper")
        {
            //losing condition
            if (computerChoice == "scissors")
            {
                computerScore++;
                message = "You lose! The scissors beat your paper.";
            }
            //winning condition
            else if (computerChoice == "rock")
            {
                humanScore++;
                message = "You win! Your paper beat the rock.";
            }
            //tie
            else 
            {
                message = "It's a tie! Two papers!";
            }
        }

        //checks matchup for human choice of scissors
        else 
        {
            //losing condition
            if (computerChoice == "rock")
            {
                computerScore++;
                message = "You lose! The rock beat your scissors.";
            }
            //winning condition
            else if (computerChoice == "paper")
            {
                humanScore++;
                message = "You win! Your scissors beat the paper.";
            }
            //tie
            else 
            {
                message = "It's a tie! Two scissors!"
            }
        }

        //outputs result of round to screen and the running score
        roundResultNode.textContent = message + " Your score: " + humanScore + 
        " Computer score: " + computerScore;
        divNode.appendChild(roundResultNode);

        const scoreDisplayNode = document.createElement("div");

        //check if enough points to win game after each round
        if (humanScore == 5)
        {
            scoreDisplayNode.textContent = "5 wins! You win! Starting new game now!";
            divNode.append(scoreDisplayNode);
            humanScore = 0;
            computerScore = 0;
        }

        else if (computerScore == 5)
        {
            scoreDisplayNode.textContent = "5 wins! Starting new game now!";
            divNode.append(scoreDisplayNode);
            humanScore = 0;
            computerScore = 0; 
        }

    }
   
    //variables to track each score
    let humanScore = 0;
    let computerScore = 0;

    //node for Rock button. Plays with a round with selected choice.
    const rockNode = document.getElementById("rock");
    rockNode.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    const paperNode = document.getElementById("paper");
    paperNode.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    const scissorNode = document.getElementById("scissors");
    scissorNode.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();