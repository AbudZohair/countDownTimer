import {
  form,
  events,
  interval,
  startTimer,
  tabPanels,
  button,
  tabs,
} from './app.js';
import { saveToLocalStorage } from './LocalStorage.js';
// handleSubmit function to be triggered once the form is submited
export function handleSubmit(e) {
  e.preventDefault();
  if (form.eventName.value && form.eventTime.value) {
    const name = form.eventName.value;
    const time = new Date(form.eventTime.value).getTime();
    const event = {
      name,
      time,
      expired: false,
    };
    if (event.time < Date.now()) {
      alert('Enter a valid Date');
      return;
    }
    e.currentTarget.reset();
    events.push(event);
    saveToLocalStorage();
    startTimer();
  } else {
    alert('Please, Fill all fields');
  }
}
// Handling Tabs hidden and appearance once the tab button is clicked
export function btnClicked(e) {
  tabPanels.forEach(tab => (tab.hidden = 'true'));
  button.forEach(t => {
    t.setAttribute('aria-selected', 'false');
  });
  e.currentTarget.setAttribute('aria-selected', 'true');
  const tabed = tabs.querySelector(`[aria-labelledby='${e.currentTarget.id}']`);
  tabed.hidden = false;
}
