const words = ["C++ | PHP", "JavaScript | React", "Python | Node.js", "HTML | CSS", "SQL | Java"];
const typewriterElement = document.getElementById("language");

let wordIndex = 0;
let letterIndex = 0;

function typeLetter() {
  if (wordIndex >= words.length) wordIndex = 0;

  const currentWord = words[wordIndex];
  const currentLetter = currentWord.slice(0, letterIndex + 1);

  typewriterElement.textContent = currentLetter;
  letterIndex++;

  if (letterIndex === currentWord.length) {
    setTimeout(() => {
      letterIndex = 0;
      wordIndex++;
      typewriterElement.textContent = "";
      setTimeout(typeLetter, 500);
    }, 1000);
  } else {
    setTimeout(typeLetter, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeLetter);

