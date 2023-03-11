const btn = document.querySelector("button");
const mainBack = document.querySelector("#main-back");
const loader = document.querySelector("#loader");
var num = 1;

document.addEventListener("DOMContentLoaded", function () {
  mainBack.setAttribute(
    "style",
    `width:${window.innerWidth - 150}px;height:${window.innerHeight - 150}px`
  );
  mainBack.style.backgroundImage = `url('/img/Gabriel1.jpg')`;

  btn.click();

  setTimeout(() => {
    mainBack.style.backgroundImage = `url('/img/Gabriel1.jpg')`;
    loader.style.display = "none";
  }, 3000);
});

btn.addEventListener("click", function () {
  num = 0;
  let id = setInterval(frame, 16.6);

  function frame() {
    if (num === 15) {
      clearInterval(id);
    } else {
      console.log(num);
      num++;
      mainBack.style.backgroundImage = `url('/img/Gabriel${num}.jpg')`;
    }
  }
});
