//function to generation computer choice
function getComputerChoice ()
{
    //assigns a random number between 1-9
    let randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
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
    //prompt user for their choice
    let humanChoice = prompt("Please choose Rock, Paper, or Scissors:");

    //convert choice to lowercase
    humanChoice = humanChoice.toLowerCase();
    
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
        return "scissors"
    }

    //modify to check user input
}

//function to play round of game with given input
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


//stores computer's choice in variable
let computerChoice = getComputerChoice();

//stores human's choice in variable
let humanChoice = getHumanChoice();

//variables to keep track of each score
let humanScore = 0;
let computerScore = 0;

playRound (humanChoice, computerChoice);