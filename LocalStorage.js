// LocalStorage File
import { events, startTimer } from './app.js';
// add events to localstorage
export function saveToLocalStorage() {
  localStorage.setItem('events', JSON.stringify(events));
}
// resotre the events from localStorage
export function restorFromLocalStorage() {
  const lsEvents = JSON.parse(localStorage.getItem('events'));
  if (lsEvents) {
    events.push(...lsEvents);
  }
  // once you updated the events array start the timer
  startTimer();
}
