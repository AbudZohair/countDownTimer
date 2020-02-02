// Main Js file
import { handleSubmit, btnClicked } from './handlers.js';
import { timer } from './Timer.js';
import { restorFromLocalStorage, saveToLocalStorage } from './LocalStorage.js';

// Grabbing all the required selectors
export const form = document.querySelector('.countdownTimer');
export const displaySection = document.querySelector('.displaysection'); // countdown timer on Screen
export const tabs = document.querySelector('.tabs');
export const button = tabs.querySelectorAll('button');
export const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
// Global
export let interval; // setInterval of Timer
export const events = []; // array to collect the whole created events

// Restore events from the local storage once the page is loaded
restorFromLocalStorage();
// form submit listener
form.addEventListener('submit', handleSubmit);
// add btnClicked Fucntion to all buttons
button.forEach(btn => btn.addEventListener('click', btnClicked));
// export this to be accessed globaly
export function startTimer() {
  timer();
  interval = setInterval(timer, 1000);
}
