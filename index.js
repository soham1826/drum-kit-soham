
var numberofdrums = document.querySelectorAll(".drum").length 

// for clicking

for(var i = 0;i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
         var buttoninnerHTML = this.innerHTML;
         makesound(buttoninnerHTML);
         addanimation(buttoninnerHTML)

    
    
})
}


// for keypressing

document.addEventListener("keypress",function(event){
        
    makesound(event.key)
    addanimation(event.key)
})


// function to make sound

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            
            break;
            
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
                
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
                    
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
                    
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
                        
            break;

        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play()
                            
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
                                
            break;
                
            

     
        default:
            break;
     }

    
}

function addanimation(currentkey) {
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
    
}




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();