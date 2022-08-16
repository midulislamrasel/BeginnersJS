//Math.floor(2.4)

//Math.ceil(2.1)

//Math.round(3.2)

//Math.round(3.5)

//Math.max(21,23,12,10)

//Math.random()

//Math.random()* 5;

//Math.floor(Math.random()*6);

//Math.floor(Math.random () * 6 ) + 1;



//

var numOfWon = 0 ;
var numOfLost = 0;

for (let x = 1; x <=5; x++) {
    var guessNumber = parseFloat(prompt("Enter a Number of  5 "));
    var randomNumber = Math.floor(Math.random() * 5) + 1;

        if (guessNumber == randomNumber) {
            console.log("You have won = " + randomNumber);
            numOfWon++;
        }
        else {
            console.log("You are lost Random Number = " + randomNumber)
            numOfLost++
        }
}
document.write("you win = " + numOfWon + " <br>");
document.write("you Lost = " + numOfLost + " <br>");


