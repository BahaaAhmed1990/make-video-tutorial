const right = document.querySelector("#right");
const left = document.querySelector("#left");
const full = document.querySelector("#full");
const content = document.querySelector("#content");
const mainBack = document.querySelector("#main-back");
const loader = document.querySelector("#loader");
const preload = document.querySelector("#preload");
const myImg = document.querySelector(".myImg");
var num = 1;

document.addEventListener("DOMContentLoaded", function () {
  // load all imgs
  for (let index = 1; index < 16; index++) {
    let img = document.createElement("img");
    img.src = `./img/Gabriel${index}.jpg`;
    preload.append(img);
  }
  content.setAttribute(
    "style",
    `width:${window.innerWidth - 100}px;height:${window.innerHeight - 50}px`
  );

  // btn.click();

  setTimeout(() => {
    // mainBack.style.backgroundImage = `url('./img/Gabriel1.jpg')`;
    loader.style.display = "none";
  }, 3000);
});

right.addEventListener("click", function () {
  // let num = 1;
  let id = setInterval(frame, 16.6);

  function frame(params) {
    console.log(num);
    if (num >= 15) {
      clearInterval(id);
    } else {
      myImg.src = `./img/Gabriel${num}.jpg`;
      num++;
    }
  }
});

left.addEventListener("click", function () {
  // let num = 1;
  let id = setInterval(frame, 16.6);

  function frame(params) {
    console.log(num);
    if (num <= 1) {
      clearInterval(id);
    } else {
      myImg.src = `./img/Gabriel${num}.jpg`;
      num--;
    }
  }
});

full.addEventListener("click", function () {
  content.requestFullscreen().then(() => {
    console.log("full screen");
  });
});
