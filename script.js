function download() {
  window.open("https://github.com/noicOrg/notebook.me.main/releases/tag/Releases");
}

function github() {
  window.open("https://github.com/noicOrg/notebook.me.main");
}

// Typing animation 
const words = ["people", "students", "developers"];
const baseText = "Trusted by 2+ ";
const el = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isFullDeleting = false; // controls full sentence erase

function animate() {
  const currentWord = words[wordIndex];
  const fullText = baseText + currentWord;

  if (!isDeleting) {
    // ---------------- TYPING ----------------
    charIndex++;
    el.textContent = fullText.substring(0, charIndex);

    if (charIndex === fullText.length) {
      isDeleting = true;
      setTimeout(animate, 1200); // ⏸ Pause AFTER full sentence is typed
      return;
    }

  } else {
    // ---------------- DELETING ----------------
    charIndex--;
    el.textContent = fullText.substring(0, charIndex);

    if (!isFullDeleting && charIndex === baseText.length) {
      // ✅ Only last word deleted → switch word
      wordIndex++;

      if (wordIndex >= words.length) {
        // ✅ Last word reached → now trigger FULL delete
        wordIndex = words.length - 1; // stay on "developers"
        isFullDeleting = true;
      } else {
        isDeleting = false;
      }
    }

    if (isFullDeleting && charIndex === 0) {
      // ✅ Full sentence erased → restart cycle
      isFullDeleting = false;
      isDeleting = false;
      wordIndex = 0; // back to "people"
    }
  }

  setTimeout(
    animate,
    isDeleting ? 40 : 60 // ⏱ Typing vs deleting speed
  );
}

window.onload = animate;

// Typing animation only changes last word

// const words = ["people", "students", "developers"];
// const baseText = "Trusted by 2+ ";
// const typingElement = document.getElementById("typing");

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function animateText() {
//   const currentWord = words[wordIndex];
//   const fullText = baseText + currentWord;

//   if (!isDeleting) {
    // TYPING -> COMMENT
  //   charIndex++;
  //   typingElement.textContent = fullText.substring(0, charIndex);

  //   if (charIndex === fullText.length) {
  //     isDeleting = true;
  //     setTimeout(animateText, 1200); // pause before erase
  //     return;
  //   }
  // } else {
    // DELETING -> COMMENT
    // charIndex--;
    // typingElement.textContent = fullText.substring(0, charIndex);

    // if (charIndex === baseText.length) {
      // switch word after deleting last word -> COMMENT
//       isDeleting = false;
//       wordIndex = (wordIndex + 1) % words.length;
//     }
//   }

//   setTimeout(animateText, isDeleting ? 40 : 60);
// }

// window.onload = animateText;