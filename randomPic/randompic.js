

var pics = ["imgs/bella.jpeg","imgs/bella2.jpg","imgs/huckley.jpg"]
var randomPic = Math.floor(Math.random()*5);
console.log(randomPic);
var pic = pics[randomPic];
document.getElementById("randomPic").style.backgroundImage = "url('"+pic+"')";