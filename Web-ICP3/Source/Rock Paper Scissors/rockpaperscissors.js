function playRockPaperScissors(selection){
    // random rock/paper/scissors choice
    var options = ["Rock", "Paper", "Scissors"]
    var randomIndex = Math.floor(Math.random() *3)
    var randomMove = options[randomIndex]

    // change html page to show the player's selected move, and the computer's move
    document.getElementById("PlayerDecision").innerHTML = selection
    document.getElementById("ComputerDecision").innerHTML = randomMove



    if (selection == "Rock" && randomMove =="Scissors")
    {   // rock breaks scissors
        document.getElementById("results").innerHTML = "You win!"
    }


}

