//Let's make a random dice generator

var player_One = Math.floor(Math.random() * 6) + 1;
var player_Two = Math.floor(Math.random() * 6) + 1;

//get their respective images

var directory_One = "images/dice" + player_One + ".png";
var directory_Two = "images/dice" + player_Two + ".png";

// set the right attributes

var image1 = document.querySelectorAll("img")[0].setAttribute("src", directory_One);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", directory_Two);

// now set the heading element to change to represent the winner

if(player_One > player_Two){
     //player one wins
     document.querySelector("h1").innerHTML = "Player One Wins!";
}else if (player_Two > player_One) {
     //player two wins
     document.querySelector("h1").innerHTML = "Player Two Wins!";

}else{
     //it's a draw
     document.querySelector("h1").innerHTML = "DRAW";
}
