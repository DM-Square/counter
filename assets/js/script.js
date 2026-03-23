// Creazione elementi DOM

const counterContainer = document.createElement(`div`);
const displayCounter = document.createElement(`span`);
const plusBtn = document.createElement(`button`);
const minusBtn = document.createElement(`button`);
const resetBtn = document.createElement(`button`);
const title = document.createElement(`h1`);
const cssLink = document.createElement(`link`);

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

document.body.append(title);
document.body.append(counterContainer);

counterContainer.append(displayCounter);
counterContainer.append(plusBtn);
counterContainer.append(minusBtn);
counterContainer.append(resetBtn);

// Counter

let counter = 0;
const maxCounter = 999999999;
const minCounter = -999999999;

displayCounter.textContent = counter;

function increase() {
  if (counter < maxCounter) {
    counter++;
    displayCounter.textContent = counter;
    saveCounter();
  } else if (counter === maxCounter) {
    counterShake(counterContainer);
  }
}

function decrease() {
  if (counter > minCounter) {
    counter--;
    displayCounter.textContent = counter;
    saveCounter();
  } else if (counter === minCounter) {
    counterShake(counterContainer);
  }
}

function reset() {
  counter = 0;
  displayCounter.textContent = counter;
  saveCounter();
}

function saveCounter() {
  localStorage.setItem("counterValue", counter);
}

function retrieveCounter() {
  const storedCounter = localStorage.getItem("counterValue");
  if (storedCounter !== null) {
    counter = Number(storedCounter);
    displayCounter.textContent = counter;
  }
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

plusBtn.addEventListener(`click`, () => {
  increase();
  btnPressed(plusBtn);
});
minusBtn.addEventListener(`click`, () => {
  decrease();
  btnPressed(minusBtn);
});
resetBtn.addEventListener(`click`, () => {
  reset();
  btnPressed(resetBtn);
});

document.addEventListener(`keydown`, (e) => {
  if (e.key === `+` || e.code === `NumpadAdd`) {
    increase();
    btnPressed(plusBtn);
  } else if (e.key === `-` || e.code === `NumpadSubtract`) {
    decrease();
    btnPressed(minusBtn);
  } else if (e.key === `0` || e.key === `r` || e.code === `Numpad0`) {
    reset();
    btnPressed(resetBtn);
  }
});
