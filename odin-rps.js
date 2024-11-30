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

//function to get user's choice
function getHumanChoice()
{
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors:");

    //if prompt is canceled, user forfeits round
    if (humanChoice == null)
    {
        return null;
    }

    //remove white space from user choice
    humanChoice = humanChoice.trim();

    //convert choice to lowercase
    humanChoice = humanChoice.toLowerCase();

    //if user enters invalid choice, re-prompt
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors")
    {
        humanChoice = prompt("Invalid option! Please choose Rock, Paper, or Scissors:");
        
        //if prompt is canceled, user forfeits round
        if (humanChoice == null)
        {
            return null;
        }

        //remove white space from user choice
        humanChoice = humanChoice.trim();

        //convert choice to lowercase
        humanChoice = humanChoice.toLowerCase();
    }

    //return matching choice
    if (humanChoice == "rock")
    {
        return "rock";
    }

    else if (humanChoice == "paper")
    {
        return "paper";
    }

    else 
    {
        return "scissors";
    }
}

//function to play the game
function playGame()
{
    //function to play a round of the game
    function playRound(humanChoice, computerChoice)
    {
        //checks matchup on human choice of rock
        if (humanChoice == "rock")
        {
            //losing condition
            if (computerChoice == "paper")
            {
                computerScore++;
                return console.log("You lose! The paper beat your rock.");
            }
            //winning condition
            else if (computerChoice == "scissors")
            {
                humanScore++;
                return console.log("You win! Your rock beat the scissors.")
            }
            //tie
            else 
            {
                return console.log("It's a tie! Two rocks!")
            }
        }
        //checks matchup on human choice of paper
        else if (humanChoice == "paper")
        {
            //losing condition
            if (computerChoice == "scissors")
            {
                computerScore++;
                return console.log("You lose! The scissors beat your paper.");
            }
            //winning condition
            else if (computerChoice == "rock")
            {
                humanScore++;
                return console.log("You win! Your paper beat the rock.")
            }
            //tie
            else 
            {
                return console.log("It's a tie! Two papers!")
            }
        }

        //checks matchup for human choice of scissors
        else 
        {
            //losing condition
            if (computerChoice == "rock")
            {
                computerScore++;
                return console.log("You lose! The rock beat your scissors.");
            }
            //winning condition
            else if (computerChoice == "paper")
            {
                humanScore++;
                return console.log("You win! Your scissors beat the paper.")
            }
            //tie
            else 
            {
                return console.log("It's a tie! Two scissors!")
            }
        }
    }
   
    //variables to track each score
    let humanScore = 0;
    let computerScore = 0;
    
    //variables to store choice
    let humanChoice = "";
    let computerChoice = "";

    //play five rounds of the game
    for (let i = 0; i <= 4; i++)
        {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();

            //forfeit round if user choice canceled prompt
            if (humanChoice == null)
            {
                console.log ("You canceled the round.")
            }

            else 
            {
                playRound (humanChoice, computerChoice);
            }
        }

    //show scores after game ends
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

playGame();