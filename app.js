let gameSequance = [];
let userSequance = [];
let highScore = 0;

let body = document.querySelector("body");
let allBtn = document.querySelectorAll(".box");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("#h4");

let box = ["yellow", "blue", "red", "green"];

let level = 0;
let started = false;
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
    userSequance = [];
  level++;
  h3.innerText = `Level ${level}`;
  let random = Math.floor(Math.random() * box.length);
  let randColor = box[random];
  gameSequance.push(randColor);
  console.log(gameSequance);
  let btnColor = document.querySelector(`.${randColor}`);
  flash(btnColor);
};

function flash(btn) {
  btn.classList.add("white");
  setTimeout(function () {
    btn.classList.remove("white");
  }, 250);
  
};

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
};

function ansCheck(idx) {
  //    console.log("current level", level);
  if (userSequance[idx] === gameSequance[idx]) {
    if (userSequance.length === gameSequance.length) {
        setTimeout(levelUp, 500);
    };
  } else {
    if(highScore < level){
        highScore = level;
    h4.innerText = `Your Highest Score is ${highScore}`;
    console.log("High Score:", highScore);
    };
    h3.innerHTML = `Game Over, Your score was <b>${level}<b> <br> Press Any Key to Restart`;
    body.classList.add("game-over");
    setTimeout(function () {
      body.classList.remove("game-over");
    }, 250);
    reset();
  };
};

for (btn of allBtn) {
  btn.addEventListener("click", function () {
    userFlash(this);
    userColor = this.getAttribute("id");
    userSequance.push(userColor);
    let idx = userSequance.length - 1;
    ansCheck(idx);
  });

  function reset() {
    started = false;
    gameSequance = [];
    userSequance = [];
    level = 0;
  };
};

