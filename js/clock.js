const clock = document.getElementById("clock");
const today = document.getElementById("today");

const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const weeks = new Array("일", "월", "화", "수", "목", "금", "토");
const week = weeks[date.getDay()];

function getClock() {
  if (hours > 12) {
    clock.innerText = `${hours - 12}:${minutes}`;
  }
  if (hours == 0) {
    clock.innerText = `12:${minutes}`;
  } else {
    clock.innerText = `${hours}:${minutes}`;
  }
}

function getToday() {
  today.innerText = `${year}년 ${month + 1}월 ${day}일 ${week}요일`;
}

getClock();
setInterval(getClock, 500);

getToday();
setInterval(getToday, 500);
