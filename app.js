const btn = document.querySelector("button");
const boxAll = document.querySelectorAll(".box");
const scoreDiv = document.querySelector("#score");
let counter = 0;
let line = 0;
let instanceList = [];
let ansWord = "check";
let ansList = ["c", "h", "e", "c", "k"];
let score = 0;

function handleClick(e) {
  if (counter < 4) {
    if (e.target.dataset.key !== undefined) {
      //text enter in the box
      pushText(e.target.dataset.key);
      counter++;
    }
  } else if (counter === 4) {
    if (e.target.dataset.key !== undefined) {
      pushText(e.target.dataset.key);
      checkAns(ansList);
      line += 5;
      counter = 0;
    }
  }
}

function pushText(text) {
  const emptyBox = document.querySelector(".empty");
  emptyBox.innerText = text;
  text = text.toLowerCase();
  instanceList.push(text);
  emptyBox.classList.remove("empty");
}

function checkAns(ans) {
  for (let i = 0; i < 5; i++) {
    if (ans.includes(instanceList[i])) {
      boxAll[i + line].classList.add("yellow");
    }
    if (ans[i] === instanceList[i]) {
      boxAll[i + line].classList.add("green");
      score++;
    }
  }
  if (score === 5) {
    scoreDiv.innerText = `  Today word is ${ansWord}`;
  }
  instanceList = [];
  score = 0;
}

document.addEventListener("click", handleClick);
