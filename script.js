/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */
function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function clickImage() {
  let wobbleWobble = document.getElementById("AnimatedImage");
  wobbleWobble.classList.add("presentImage-animated");
}

let wobbleWobble = document.getElementById("AnimatedImage");
wobbleWobble.addEventListener("click", clickImage);
/*Animate the image in present.html on click 
function clickImage() {
  let wobbleWobble = document.getElementById("AnimatedImage");
  box.classList.add("presentImage-animated");
}

let box = document.getElementById("AnimatedImage");
box.addEventListener("click", clickImage);
*/
