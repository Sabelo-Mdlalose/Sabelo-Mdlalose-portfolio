const languages = ["C++ | PHP","JavaScript | React", "Python | Node.js", "HTML | CSS", "SQL | Java"];
let index = 0;

function cycleLanguages() {
  document.getElementById("language").textContent = languages[index];
  index = (index + 1) % languages.length;
}

setInterval(cycleLanguages, 2000);
