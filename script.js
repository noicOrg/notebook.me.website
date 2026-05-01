function download() {
  window.open("https://github.com/noicOrg/notebook.me.main/releases/tag/Releases");
}

function github() {
  window.open("https://github.com/noicOrg/notebook.me.main");
}

// Typing animation
const words = ["people", "students", "developers"];
const baseText = "Trusted by 2+ ";
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animateText() {
  const currentWord = words[wordIndex];
  const fullText = baseText + currentWord;

  if (!isDeleting) {
    // Typing
    charIndex++;
    typingElement.textContent = fullText.substring(0, charIndex);

    if (charIndex === fullText.length) {
      isDeleting = true;
      setTimeout(animateText, 1200); // pause before erase
      return;
    }
  } else {
    // Deleting
    charIndex--;
    typingElement.textContent = fullText.substring(0, charIndex);

    if (charIndex === baseText.length) {
      // switch word after deleting last word
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(animateText, isDeleting ? 40 : 60);
}

window.onload = animateText;