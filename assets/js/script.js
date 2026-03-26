// Creazione elementi DOM

const counterContainer = document.createElement(`div`);
const displayCounter = document.createElement(`span`);
const plusBtn = document.createElement(`button`);
const minusBtn = document.createElement(`button`);
const resetBtn = document.createElement(`button`);
const title = document.createElement(`h1`);
const cssLink = document.createElement(`link`);

// Classi

counterContainer.classList.add("container");
plusBtn.classList.add("btn-main");
minusBtn.classList.add("btn-main");
resetBtn.classList.add("btn-reset");
title.classList.add("title");
displayCounter.classList.add("display");

// textContent Elementi

title.textContent = `Count on Me!`;
plusBtn.textContent = `+`;
minusBtn.textContent = `-`;
resetBtn.textContent = `Reset`;

// Aggiunta elementi creati

cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "assets/css/main.css");
document.head.append(cssLink);

document.body.append(title, counterContainer);

counterContainer.append(displayCounter, plusBtn, minusBtn, resetBtn);

// Counter

let counter = 0;
const maxCounter = 999999999;
const minCounter = -999999999;

function updateCounter() {
  displayCounter.textContent = counter;
  localStorage.setItem("counterValue", counter);
}

function changeCounter(amount) {
  const newCounter = counter + amount;

  if (newCounter > maxCounter || newCounter < minCounter) {
    counterShake(counterContainer);
    return;
  }

  counter = newCounter;
  updateCounter();
}

function resetCounter() {
  counter = 0;
  updateCounter();
}

function retrieveCounter() {
  const storedCounter = localStorage.getItem("counterValue");
  if (storedCounter !== null) {
    counter = Number(storedCounter);
  } else {
    counter = 0;
  }
  updateCounter();
}

// Funzioni di Animazione

function btnPressed(btn) {
  btn.classList.remove("pressed");
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 100);
}

function counterShake(container) {
  container.classList.add("shake");
  setTimeout(() => {
    container.classList.remove("shake");
  }, 300);
}

// Event Listener (Mouse + Keyboard)

document.addEventListener("DOMContentLoaded", retrieveCounter);

const btnActions = [
  { btn: plusBtn, fn: () => changeCounter(1) },
  { btn: minusBtn, fn: () => changeCounter(-1) },
  { btn: resetBtn, fn: () => resetCounter() },
];

btnActions.forEach(({ btn, fn }) => {
  btn.addEventListener(`click`, () => {
    fn();
    btnPressed(btn);
  });
});

const keyActions = [
  { keys: ["+", "NumpadAdd"], btn: plusBtn, fn: () => changeCounter(1) },
  { keys: ["-", "NumpadSubtract"], btn: minusBtn, fn: () => changeCounter(-1) },
  { keys: ["0", "r", "Numpad0"], btn: resetBtn, fn: () => resetCounter() },
];

document.addEventListener("keydown", (e) => {
  keyActions.forEach(({ keys, btn, fn }) => {
    if (keys.includes(e.key) || keys.includes(e.code)) {
      fn();
      btnPressed(btn);
    }
  });
});
