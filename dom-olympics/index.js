var heel = document.querySelector("#colorName")
heel.textContent = "Owen Waters"
//heel.style.display = "inline"
heel.style.textAlign = "center"

var head = document.getElementById("header")
head.textContent = "wrote the JavaScript"
//head.style.display = "inline"
head.style.textAlign = "center"


var foot = document.createElement("h1")
foot.textContent = "JavaScript made this!"
document.body.prepend(foot)
foot.style.textAlign = "center"


var funText = document.querySelector(".messageLeft1")
funText.textContent = "Hey, you are really cool!"

var goodText = document.querySelector(".messageRight1")
goodText.textContent = "Thank you!"

var hangout = document.querySelector(".messageLeft2")
hangout.textContent = 'Do you want to hang out?'

var answer = document.querySelector(".messageRight2")
answer.textContent = ("Of course!")

//var clear = document.getElementById('clear-button')
//clear.addEventListener ("click", takeAway)

function takeAway(){
document.getElementById("goAway").remove();
};


// var apple = document.getElementById("other")
// apple.addEventListener("onchange" , changeColor)

// var tree = document.getElementById("different")
// tree.addEventListener("onchange" , option1)

// var drop = document.querySelector("#theme-drop-down")
//  drop.addEventListener("", changeColor)



function changeColor(){
   var select= document.querySelector("#theme-drop-down")
   var colors = select.value
   if(colors === "theme-one"){
    var blue = document.getElementsByClassName("leftMessage")
    var brown = document.getElementsByClassName("rightMessage")
    brown.style.backgroundColor = "burlywood"
    blue.style.backgroundColor = "blue"}
    if (colors === "theme-two"){
        var black = document.getElementsByClassName("leftMessage")
        var red = document.getElementsByClassName("rightMessage")
        black.style.backgroundColor = "black"
        red.style.backgroundColor = "red"
    }
};

//  function option1 (){
//    var blue=  document.querySelectorAll("#leftText")
//     var peach=  document.querySelectorAll("#rightText")
//     blue.style.backgroundColor = "blue"
//     peach.style.backgroundColor= "peachpuff"
// };

//  function combine(){
//     changeColor();
//     option1();
//  };

// function changeColor(){
//     var easy = document.querySelectorAll("#leftText")
//     for (var i = 0; i < easy.length; i++){
//         easy.style.backgroundColor = "red"
//     }
var addText = document.getElementById("input")
var sendButton = document.getElementById("send")
sendButton.addEventListener("click", sendFunc)
var place = document.getElementById("main")

function sendFunc(){
    var newText = document.createElement("div")
    var forms = addText.value
    newText.textContent = forms
    place.append(newText)

}