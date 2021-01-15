var num_Btns = document.getElementsByTagName("button");
var sound = new Audio();
for(var i = 0; i < num_Btns.length; i++){
     num_Btns[i].addEventListener("click", function(){
          var inner = this.innerHTML;
          playSound(inner);
     });
}

window.addEventListener("keydown", (e) => {
     console.log(e.key);
     playSound(e.key);
});

function playSound(l){
     switch (l) {
          case "w":
               var audio = new Audio("sounds/tom-1.mp3");
               audio.play();
               break;
          case "a":
               var audio = new Audio("sounds/tom-3.mp3");
               audio.play();
               break;
          case "s":
               var audio = new Audio("sounds/tom-4.mp3");
               audio.play();
               break;
          case "d":
               var audio = new Audio("sounds/tom-2.mp3");
               audio.play();
               break;
          case "j":
               var audio = new Audio("sounds/snare.mp3");
               audio.play();
               break;
          case "k":
               var audio = new Audio("sounds/crash.mp3");
               audio.play();
               break;
          case "l":
               var audio = new Audio("sounds/kick-bass.mp3");
               audio.play();
               break;
     }
     btn_Animation(l);
}

function btn_Animation(l){
     document.querySelector("." + l).classList.add("pressed");
     setTimeout(function(){
          document.querySelector("." + l).classList.remove("pressed");
     },150);
}
