import './style.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

document.querySelector('#app').innerHTML = `
<div class="page">
<a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
  ← На головну
</a>
<h1>Таймер</h1>

<div class="timer-controls">
  <input type="text" id="datetime-picker" />
  <button data-start disabled>
    Start
  </button>
</div>

<div class="timer">
  <div>
    <span data-days>00</span>
    <p>Days</p>
  </div>

  <div>
    <span data-hours>00</span>
    <p>Hours</p>
  </div>

  <div>
    <span data-minutes>00</span>
    <p>Minutes</p>
  </div>

  <div>
    <span data-seconds>00</span>
    <p>Seconds</p>
  </div>
</div>
</div>
`;

const startBtn = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');

let userSelectedDate = null;
let timerId = null;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      alert('Please choose a date in the future');
      startBtn.disabled = true;
      return;
    }

    userSelectedDate = selectedDate;
    startBtn.disabled = false;
  },
});

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  input.disabled = true;

  timerId = setInterval(() => {
    const currentTime = Date.now();

    const deltaTime =
      userSelectedDate - currentTime;

    if (deltaTime <= 0) {
      clearInterval(timerId);

      updateTimer({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      input.disabled = false;

      return;
    }

    updateTimer(convertMs(deltaTime));
  }, 1000);
});

function updateTimer({
  days,
  hours,
  minutes,
  seconds,
}) {
  document.querySelector('[data-days]').textContent =
    addLeadingZero(days);

  document.querySelector('[data-hours]').textContent =
    addLeadingZero(hours);

  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);

  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor(
    (ms % day) / hour
  );

  const minutes = Math.floor(
    ((ms % day) % hour) / minute
  );

  const seconds = Math.floor(
    (((ms % day) % hour) % minute) / second
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}