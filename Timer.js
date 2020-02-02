// Timer and interval Main File to handle all events time and alert finishing

import { events, displaySection, interval, startTimer } from './app.js';
import { displayUpcomingAndExpired } from './display.js';
import { saveToLocalStorage } from './LocalStorage.js';
// timer function to handle the calculation of the days, hours, minutes, seconds till the event
export function timer() {
  // get the ms of now
  const now = Date.now();

  const html = events
    .map(event => {
      const remaining = event.time - now;

      if (remaining <= 0 && !event.expired) {
        clearInterval(interval);
        event.expired = true;
        saveToLocalStorage();
        alert(`Your ${event.name} has Expired`);
        return;
      }
      if (remaining > 0) {
        let seconds = Math.floor(remaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        [seconds, minutes, hours] = [seconds % 60, minutes % 60, hours % 24];

        return `
        <section>
        <p class="name">${event.name}</p>
        <span class="day"> ${days} days</span> : 
        <span class="hours"> ${hours} h</span> :
          <span class="minutes"> ${minutes} m</span> :
          <span class="seconds"> ${seconds} S</span>
          </section>
          `;
      }
    })
    .join('');
  displayUpcomingAndExpired();
  displaySection.innerHTML = html;
}
