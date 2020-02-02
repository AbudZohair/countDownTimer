// Display handler File to display the upcoming and expired events on screen

import { events } from './app.js';
// selecting Display Sections
const upcomingDisplay = document.querySelector('.upcoming');
const expiredDisplay = document.querySelector('.expired');

export function displayUpcomingAndExpired() {
  const expiredHtml = events
    .map(event => {
      if (event.expired) {
        return `<p>${event.name}
        
        <span class="no">(${new Date(
          parseInt(event.time)
        ).toLocaleDateString()} 
        ${new Date(parseInt(event.time)).toLocaleTimeString()})</span>
        </p>`;
      }
    })
    .join('');

  expiredDisplay.innerHTML = expiredHtml; // to display the expired events
  const upcomingHtml = events
    .map(event => {
      if (!event.expired) {
        return `<p>${event.name} 
        
        <span>(${new Date(parseInt(event.time)).toLocaleDateString()} 
        ${new Date(parseInt(event.time)).toLocaleTimeString()}) </span>
        </p>`;
      }
    })
    .join('');
  // to display the upcoming events
  upcomingDisplay.innerHTML = upcomingHtml;
}
