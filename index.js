
//Use the random number to pick out a random dice image between dice1.png to dice 6.png
//create an array contains all the images
imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]


//create a function to get random images
function getRanIma(){
  // get a random index
  RanIndex1 = Math.floor(Math.random()*imageArray.length);
  RanIndex2 = Math.floor(Math.random()*imageArray.length);

  //get an image at the random-index
  selectedIma1 = imageArray[RanIndex1]
  selectedIma2 = imageArray[RanIndex2]

  //disply a random image
  document.getElementById("image1").src = selectedIma1
  document.getElementById("image2").src = selectedIma2

  //disply the winner use
  if(selectedIma1 === selectedIma2){
    return document.querySelector("h1").innerHTML = "Draw  🙃";
  }else if (selectedIma1 > selectedIma2){
    return document.querySelector("h1").innerHTML = "Player1  Wins  🏆";
  }else {
    return document.querySelector("h1").innerHTML = "Player2  Wins  🏆";
  }

}
