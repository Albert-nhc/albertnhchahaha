const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const dogGif = document.getElementById("dogGif");

// 所有可随机的 gif
const gifList = [
  "02.gif",
  "03.gif",
  "04.gif",
  "05.gif"
];


// ⭐ 抽一个随机 gif 的函数
function changeGifRandomly() {
  const randomIndex = Math.floor(Math.random() * gifList.length);
  dogGif.src = gifList[randomIndex];
}

// 点击 A
optionA.addEventListener("click", () => {
  optionA.classList.add("active");
  optionA.classList.remove("inactive");

  optionB.classList.add("inactive");
  optionB.classList.remove("active");

  // 换 gif
  changeGifRandomly();
});

// 点击 B
optionB.addEventListener("click", () => {
  optionB.classList.add("active");
  optionB.classList.remove("inactive");

  optionA.classList.add("inactive");
  optionA.classList.remove("active");

  // ⭐ 同样换 gif
  changeGifRandomly();
});
