function RollDice() {
    //First die
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
    //Second die
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
    //Calculation to get the total space you need to move, parsed into an int so they are not added as a string.
    var sum = parseInt(document.getElementById("dice1").value, 10) + parseInt(document.getElementById("dice2").value, 10);
    document.getElementById("sumID").value = sum;
}

