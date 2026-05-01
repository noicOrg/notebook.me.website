function download() {
  window.open("https://github.com/noicOrg/notebook.me.main/releases/tag/Releases");
}

function github() {
  window.open("https://github.com/noicOrg/notebook.me.main");
}

// Typing animation
const text = "Trusted by 2+ people";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.onload = typeEffect;