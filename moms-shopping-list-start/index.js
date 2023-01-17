var form = document.myItem

form.addEventListener("submit", (event)=> {
    event.preventDefault()
   var newValue = document.myItem.title.value
   var userText = document.createElement("ls")
    userText.textContent= newValue
    var align= document.getElementById("list")
    align.prepend(userText)
    userText.style.textAlign= "center"
    userText.style.display= "Block"
    userText.style.margin = "10px"
    document.myItem.reset()
    var press= document.createElement("button")
    press.textContent= "x"
    userText.append(press)
    //press.style.display= "Block"
    press.style.textAlign= "center"
    var button2 = document.createElement("button")
    button2.textContent= "edit"
    userText.append(button2)
    //button2.style.display= "Block"
    button2.style.textAlign= "center"

    press.addEventListener("click", myFunc)
    function myFunc(){
        userText.remove()
    };

    button2.addEventListener("click", edit)
    function edit(){
        var editBox = document.createElement("input")
        var save = document.createElement("button")
        save.textContent = "save"
        editBox.textContent = newValue
        userText.append(editBox)
        userText.append(save)
        save.addEventListener("click", ()=> {
            userText.textContent = editBox.value
            var press= document.createElement("button")
            press.textContent= "x"
            userText.append(press)
            press.addEventListener("click", myFunc)
            function myFunc(){
                userText.remove()
            };
            var button2 = document.createElement("button")
            button2.textContent= "edit"
            userText.append(button2)
            button2.addEventListener("click", edit)
        });
    }

});


