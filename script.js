/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu */
function myFunction() {
  const myLinksContainer = document.getElementById("myLinks");
  if (myLinksContainer.style.display === "block") {
    myLinksContainer.style.display = "none";
  } else {
    myLinksContainer.style.display = "block";
  }
}

/* Makes the image in present.html flip by mouse-click*/
function clickImage() {
  let wobbleWobble = document.getElementById("AnimatedImage");
  wobbleWobble.classList.add("presentImage-animated");
}

let wobbleWobble = document.getElementById("AnimatedImage");
wobbleWobble.addEventListener("click", clickImage);
