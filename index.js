// alert("are you ok");

var randomNumber1= Math.floor(Math.random()*6 +1);
console.log(randomNumber1);

var imageTitle = "images/dice" + randomNumber1+ ".png";
console.log(imageTitle);

document.querySelector(".img1").src= imageTitle;
// she
// var image1 = document.querySelectorAll("img")[1];
// image1.setAttribute("src",imageTitle);
// or
// document.querySelectorAll("img")[1].setAttribute("src",imageTitle);

var randomNumber2= Math.floor(Math.random()*6 +1);
console.log(randomNumber2);

var imageTitle2 = "images/dice" + randomNumber2+ ".png";
console.log(imageTitle);

document.querySelector(".img2").src= imageTitle2;


if(imageTitle>imageTitle2){
  // console.log("left side won");
  document.querySelector("h1").innerHTML="Player left won";

}
else if(imageTitle<imageTitle2){
  // console.log("right side won kaka");
  document.querySelector("h1").innerHTML="Player right won";
}
else{
  console.log("Posiibly they are tie")
  document.querySelector("h1").innerHTML="draw";
}
