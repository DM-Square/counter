// Creazione elementi DOM

const bodyElement = document.querySelector("body");
const counterContainer = document.createElement("div");
const displayCounter = document.createElement("span");
const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const title = document.createElement("h1");

// Stringhe CSS

// Stili CSS

bodyElement.style.cssText =
  "background-color: #151515; margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif";

counterContainer.style.cssText =
  "background-color: #282828; height: 20rem; width: 20rem; display: flex; border: 3px solid #ffd500; justify-content: center; align-items: flex-end; margin: auto; border-radius: 0.5rem; position: relative;";

plusBtn.style.cssText =
  "height: 4rem; width: 4rem; margin: 4rem 1rem; font-size: 2.5rem; color: #151515; background-color: #ffd500; border: 4px solid #877000; border-radius: 0.5rem; border-top: none; box-shadow: 0 0 8px #151515";
minusBtn.style.cssText =
  "height: 4rem; width: 4rem; margin: 4rem 1rem; font-size: 2.5rem; color: #151515; background-color: #ffe560; border: 4px solid #877000; border-radius: 0.5rem; border-top: none; box-shadow: 0 0 8px #151515";
resetBtn.style.cssText =
  "position: absolute; bottom: 1rem; text-transform: uppercase; height: 2rem; width: 10rem; font-size: 1.25rem; color: #ffd500; background-color: #151515; border: 4px solid #151515; border-top: none; border-radius: 0.5rem; box-shadow: 0 0 8px #151515";

title.style.cssText =
  "text-align: center; font-size: 2.5rem; text-transform: uppercase; color: #ffd500; text-shadow: 0 0 3px #ffd500; margin-top: 5rem;";

displayCounter.style.cssText =
  "width: 200px; height: 50px; background-color: #151515; position: absolute; top: 2rem; border: 3px solid #ffd500; border-top: 1px solid #877000; border-bottom: 2px solid #877000; border-radius: 0.5rem; font-size: 2.4rem; text-align: right; color: #ffd500; padding: 0.5rem 0.25rem; padding-bottom: 0;";

// textContent Elementi

title.textContent = "Contatore";
plusBtn.textContent = "+";
minusBtn.textContent = "-";
resetBtn.textContent = "Reset";

// Aggiunta elementi creati

bodyElement.append(title);
bodyElement.append(counterContainer);

counterContainer.append(plusBtn);
counterContainer.append(minusBtn);
counterContainer.append(resetBtn);
counterContainer.append(displayCounter);

// Funzioni Counter

let counter = 0;
const maxCounter = 999999999;
const minCounter = -999999999;

displayCounter.textContent = counter;

function increase() {
  if (counter < maxCounter) {
    counter++;
    displayCounter.textContent = counter;
  } else if (counter === maxCounter) {
    alert("Hai raggiunto il limite.");
  }
}

function decrease() {
  if (counter > minCounter) {
    counter--;
    displayCounter.textContent = counter;
  } else if (counter === minCounter) {
    alert("Hai raggiunto il limite.");
  }
}

function reset() {
  counter = 0;
  displayCounter.textContent = counter;
}

// Event Listener

plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

document.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.code === "NumpadAdd") increase();
  else if (e.key === "-" || e.code === "NumpadSubtract") decrease();
  else if (e.key === "0" || e.key === "r" || e.code === "Numpad0") reset();
});
