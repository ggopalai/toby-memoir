var pics = [
    "images/toby1.JPG",
    "images/toby2.JPG",
    "images/toby3.JPG",
    "images/toby4.JPG",
    "images/toby5.JPG",
    "images/toby6.jpg",
    "images/toby7.jpg",
    "images/toby8.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img")
var counter = 1
btn.addEventListener("click", function(){
    img.src = pics[counter];
    counter = (counter + 1) % pics.length;
});