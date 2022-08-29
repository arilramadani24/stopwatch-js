// Global Variables
const time = document.querySelector(".maintime .time");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const milisecond = document.getElementById("milisecond");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const restart_btn = document.getElementById("restart");

// variable for count
let mil = 00;
let sec = 00;
let min = 00;
let hours = 00;
let Interval;

// control function
start_btn.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(() => {
    startTimer();
  }, 10);

  stop_btn.onclick = function () {
    clearInterval(Interval);
  };
};

restart_btn.onclick = function () {
  clearInterval(Interval);
  mil = "00";
  sec = "00";
  min = "00";
  hours = "00";
  milisecond.innerHTML = mil;
  second.innerHTML = sec;
  minute.innerHTML = min;
  hour.innerHTML = hours;
};

function startTimer() {
  mil++;

  if (mil < 9) milisecond.innerHTML = "0" + mil;

  if (mil > 9) milisecond.innerHTML = mil;

  if (mil > 99) {
    sec++;
    second.innerHTML = "0" + sec;
    mil = 0;
    milisecond.innerHTML = "0" + 0;
  }

  if (sec > 9) second.innerHTML = sec;

  if (sec > 59) {
    min++;
    minute.innerHTML = "0" + min;
    sec = 0;
    second.innerHTML = "0" + 0;
  }

  if (min > 9) minute.innerHTML = min;

  if (min > 60) {
    hours++;
    hour.innerHTML = "0" + hours;
    min = 0;
    minute.innerHTML = "0" + 0;
  }
}
