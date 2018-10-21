
window.onload = pic;
var pics = ["imgs/bella.jpeg","imgs/bella2.jpg","imgs/huckley.jpg"]
var randomPic = Math.floor(Math.random()*pic.length);
var pic = pics[number];
document.getElementById("randomPic").src = pics[randomPic];