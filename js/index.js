document.addEventListener("DOMContentLoaded", function () {
  // Alert user
  document.querySelector("form").addEventListener("submit", function (event) {
    let name = document.querySelector("#name").value;
    alert("Hello, " + name);
    event.preventDafault;
  });

  // Like and love buttons
  let like = 0;
  let love = 0;

  document.querySelector("#add_like").onclick = function () {
    like += 1;
    document.querySelector("#score_like").innerHTML = like;
  };

  document.querySelector("#add_love").onclick = function () {
    love += 1;
    document.querySelector("#score_love").innerHTML = love;
  };
  // mute button script
  var mute_button = document.getElementById("mute");
  var background_song = document.getElementById("background_song");



  mute_button.onclick = function () {
    if (background_song.muted) {
      background_song.muted = false;
      mute_button.src = "./icons/volume-high-outline.svg";
    }
    else {
      background_song.muted = true;
      mute_button.src = "./icons/volume-mute-outline.svg";
    }
  };
});
document.addEventListener("click", function () {
  if (background_song.paused) {
    background_song.play();
  }
});
// function blink() {
//   let body = document.querySelector("#me");
//   if (body.style.visibility == "hidden") {
//     body.style.visibility = "visible";
//   } else {
//     body.style.visibility = "hidden";
//   }
// }

window.setInterval(blink, 500);

