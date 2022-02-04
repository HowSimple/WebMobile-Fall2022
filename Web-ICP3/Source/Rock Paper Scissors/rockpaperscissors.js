function playRockPaperScissors(selection){
    // random rock/paper/scissors choice
    var options = ["Rock", "Paper", "Scissors"]
    var randomIndex = Math.floor(Math.random() *3)
    var randomMove = options[randomIndex]

    // change html page to show the player's selected move, and the computer's move

    document.getElementById("PlayerDecision").innerHTML = selection
    document.getElementById("ComputerDecision").innerHTML = randomMove
    document.getElementById("results").style.visibility = "visible";


    if (selection == "Rock" && randomMove =="Scissors")
    {   // rock breaks scissors rule
        document.getElementById("winner").innerHTML = "You win!"
    }
    else if (selection == "Scissors" && randomMove =="Paper")
    {   // scissors cuts paper rule
        document.getElementById("winner").innerHTML = "You win!"
    }
    else if (selection == "Paper" && randomMove =="Rock")
    {   // paper covers rock rule
        document.getElementById("winner").innerHTML = "You win!"
    }
    else if (selection == randomMove)
    {   // tie game
        document.getElementById("winner").innerHTML = "It's a draw!"
    }
    else
    {
        document.getElementById("winner").innerHTML = "You lose!"
    }


}

