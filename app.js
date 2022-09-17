const btn = document.querySelector("button");
const boxAll = document.querySelectorAll(".box");
const scoreDiv = document.querySelector("#score");
let counter = 0;
let line = 0;
let instanceList = [];
let instanceBtnList = [];
let ansWord = "";
let ansList = [];
let score = 0;

//setup
function init() {
  ansWord = words[Math.floor(Math.random() * words.length)];
  ansList = ansWord.split("");
  console.log(ansWord);
}

function handleClick(e) {
  const target = e.target.dataset.key;
  //save event target
  if (target !== undefined && counter < 10) {
    instanceBtnList.push(e.target);
  }
  //push and check
  if (counter < 4) {
    if (target !== undefined) {
      pushText(target);
      counter++;
    }
  } else if (counter === 4) {
    if (target !== undefined) {
      pushText(target);
      checkAns(ansList);
    }
  }
}

function pushText(text) {
  const emptyBox = document.querySelector(".empty");
  emptyBox.innerText = text;
  instanceList.push(text.toLowerCase());
  emptyBox.classList.remove("empty");
}

function checkAns(ans) {
  for (let i = 0; i < 5; i++) {
    //yellow
    if (ans.includes(instanceList[i])) {
      boxAll[i + line].classList.add("yellow");
      instanceBtnList[i].classList.add("yellow");
    } else {
      instanceBtnList[i].classList.add("grey");
    }
    //green
    if (ans[i] === instanceList[i]) {
      boxAll[i + line].classList.add("green");
      instanceBtnList[i].classList.add("green");
      score++;
    }
  }

  //clear variable
  counter = 0;
  instanceList = [];
  instanceBtnList = [];

  //check result
  if (score === 5) {
    scoreDiv.innerText = `==>The word is "${ansWord}" and you Win!`;
    counter = 15;
  } else if (line === 25) {
    scoreDiv.innerText = `==>The word is "${ansWord}" and you lose!`;
    counter = 15;
  }

  //clear result
  line += 5;
  score = 0;
}

init();
document.addEventListener("click", handleClick);
