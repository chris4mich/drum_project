var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerHtmlButton = this.innerHTML;
    makeSound(innerHtmlButton);
    buttonAnimation(innerHtmlButton);
    triggerBuzzAnimation(innerHtmlButton);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  triggerBuzzAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "ς":
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "α":
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "σ":
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "δ":
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "ξ":
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "κ":
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "λ":
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(innerHtmlButton);
  }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout (function() {
      activeButton.classList.remove("pressed");
    }, 100);
}

function triggerBuzzAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.remove("buzz-out-on-hover-trigger");
  void activeButton.offsetWidth;
  activeButton.classList.add("buzz-out-on-hover-trigger");
}

if (document.fullscreenEnabled) {
  const fullscreen_button = document.createElement("button");
  fullscreen_button.setAttribute('id','fullscreen-button');
  fullscreen_button.addEventListener("click", toggle_fullscreen);
  fullscreen_button.innerHTML  = `
      <svg viewBox="0 0 24 24">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 
          7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
      </svg>
      <svg viewBox="0 0 24 24">
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 
          11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
      </svg>
  `;
  document.body.appendChild(fullscreen_button);
}

function toggle_fullscreen() {
  if (!document.fullscreenElement) {
      document.body.requestFullscreen();
      document.body.setAttribute("fullscreen",""); 
  } else {
      document.exitFullscreen();
      document.body.removeAttribute("fullscreen"); 
  }
} 