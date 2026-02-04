const dogGif = document.getElementById("dogGif");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");

// 所有可用的 gif
const gifs = ["01.gif", "02.gif", "03.gif", "04.gif", "05.gif", "06.gif", "07.gif", "08.gif"];

function randomGif() {
  const index = Math.floor(Math.random() * gifs.length);
  dogGif.src = gifs[index];
}

function selectA() {
  optionA.classList.add("active");
  optionA.classList.remove("inactive");

  optionB.classList.add("inactive");
  optionB.classList.remove("active");

  randomGif();
}

function selectB() {
  optionB.classList.add("active");
  optionB.classList.remove("inactive");

  optionA.classList.add("inactive");
  optionA.classList.remove("active");

  randomGif();
}

optionA.addEventListener("click", selectA);
optionB.addEventListener("click", selectB);

