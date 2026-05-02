function download() {
  window.open("https://github.com/VervainLabs/notebook.me.main/releases/download/Releases/NotebookMe-portable.rar");
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
let isFullDeleting = false;

function animate() {
  const currentWord = words[wordIndex];
  const fullText = baseText + currentWord;

  if (!isDeleting) {
    // ---------------- TYPING ----------------
    charIndex++;
    el.textContent = fullText.substring(0, charIndex);

    if (charIndex === fullText.length) {
      isDeleting = true;
      setTimeout(animate, 1200); // ⏸ Pause after full sentence typed
      return;
    }

  } else {
    // ---------------- DELETING ----------------
    charIndex--;
    el.textContent = fullText.substring(0, charIndex);

    if (!isFullDeleting && charIndex === baseText.length) {
      // Switch word (people → students → developers)
      wordIndex++;

      if (wordIndex >= words.length) {
        // Start full delete after last word
        wordIndex = words.length - 1;
        isFullDeleting = true;
      } else {
        isDeleting = false;
      }
    }

    if (isFullDeleting && charIndex === 0) {
      // ✅ FULL ERASE COMPLETE → add realistic pause
      isFullDeleting = false;
      isDeleting = false;
      wordIndex = 0;

      const delayAfterFullErase = 1500 + Math.random() * 800;
      // ⏱ 1500–2300ms random delay (realistic human pause)

      setTimeout(animate, delayAfterFullErase);
      return;
    }
  }

  setTimeout(
    animate,
    isDeleting
      ? 30 + Math.random() * 20   // ⏱ Deleting speed (randomized)
      : 50 + Math.random() * 30   // ⏱ Typing speed (randomized)
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