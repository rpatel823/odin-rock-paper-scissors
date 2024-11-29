//function to generation computer choice
function getComputerChoice ()
{
    //assigns a random number between 1-9
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



//stores computer's choice in a variable
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(humanChoice);