var y=document.querySelectorAll(".drum").length;
for(var i=0;i<y;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  })}
document.body.addEventListener("keydown",function (keyValue){
  playSound(keyValue.key);
  buttonAnimation(keyValue.key);
})






function playSound(key){
  switch(key){
    case "w" :
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
    case "a" :
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s" :
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d" :
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j" :
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k" :
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l" :
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
  }
}



function buttonAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey)
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },150);

}