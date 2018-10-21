/*
function randomPic() {
    var pics = new Array();
    var pics = ["img/bella.jpg","img/bella2.jpg", "img/huxley.jpg"];
    var picChoice = Math.floor(Math.random()*pics.length);
    showpic = pics[picChoice];
    document.body.style.backgroundImage = "url('"+ showpic+"')";
   // document.body.style.backgroundSize= "cover";
    //document.body.style.backgroundAttachment = "fixed";
}*/

var pics = ["imgs/bella.jpeg","imgs/bella2.jpg","imgs/huckley.jpg"]
var number = Math.floor(Math.random()*pic.length);
var pic = pics[number];
document.getElementById("wrapper").style.backgroundImage = "url('"+pic+"')";