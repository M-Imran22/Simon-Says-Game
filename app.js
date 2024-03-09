let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (start == false) {
    console.log("game started");
    start = true;
  }

  levelUp();
});

const gameFlash = (button) => {
  button.classList.add("flash");
  setTimeout(() => {
    button.classList.remove("flash");
  }, 300);
};
const userFlash = (button) => {
  button.classList.add("userFlash");
  setTimeout(() => {
    button.classList.remove("userFlash");
  }, 300);
};
const gameOver = () => {
  let body = document.querySelector("body");
  body.classList.add("gameOver");
  setTimeout(() => {
    body.classList.remove("gameOver");
  }, 300);
};

const levelUp = () => {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randInx = Math.floor(Math.random() * 4);
  let randColor = btns[randInx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randBtn);
};

function checkBtn(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to restart`;
    gameOver();
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkBtn(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

const reset = () => {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
};
