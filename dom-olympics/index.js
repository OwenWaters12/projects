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

   var leftMsgs = document.getElementsByClassName("leftMessage")
   var rightMsgs = document.getElementsByClassName("rightMessage")
   if(colors === "theme-one"){
    //var blue = document.getElementsByClassName("leftMessage")

    // console.log("changeColor themeone array:", blue)
    //var brown = document.getElementsByClassName("rightMessage")
    for(let i =0; i < leftMsgs.length; i++){
        leftMsgs[i].style.backgroundColor= "blue"
        rightMsgs[i].style.backgroundColor= "burlywood"
    }
    // brown.style.backgroundColor = "burlywood"
    // blue.style.backgroundColor = "blue"
    }

    if (colors === "theme-two"){
        // var black = document.getElementsByClassName("leftMessage")
        // var red = document.getElementsByClassName("rightMessage")
        for(let i =0; i < leftMsgs.length; i++){
            leftMsgs[i].style.backgroundColor= "red"
            rightMsgs[i].style.backgroundColor= "black"
        }
        // black.style.backgroundColor = "black"
        // red.style.backgroundColor = "red"
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
sendButton.addEventListener("click", function(e){
    e.preventDefault()
    sendFunc()
})
var place = document.getElementById("goAway")

function sendFunc(){
    let newText = document.createElement("div")
    let forms = addText.value
    newText.textContent = forms
    place.append(newText)
    let newMsgs = document.getElementsByClassName("message")
    console.log("newMsgs", newMsgs)
    console.log(newMsgs[newMsgs.length-1])
    newText.classList.add("message")
    console.log(newMsgs[newMsgs.length-1].classList.contains("leftMessage"))
    if(newMsgs[newMsgs.length-1].classList.contains("messageLeft1")){
        console.log("left")
        newText.classList.add("messageRight1", "rightMessage")
    }else{
        console.log("right")
        newText.classList.add("messageLeft1","leftMessage")}
}