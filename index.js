var buttons = document.querySelectorAll(".drum");


for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        console.log(this);
        var buttonInnerHTML = this.innerHTML;

        keyCase(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function(e){


    var key = e.key.toLowerCase();
    keyCase(key);
    buttonAnimation(key);

})

function keyCase(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            console.log("Sound played")
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;


        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(this)


    }

}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);

}
