const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const amPmElement = document.querySelector(".ampm");

let date = new Date();

let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
let amPm = hour < 12 ? "AM" : "PM";

hourElement.textContent = hour;
minuteElement.textContent = minute;
secondElement.textContent = second;
amPmElement.textContent = amPm;

setInterval(function() {
    date = new Date();

    hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    amPm = hour < 12 ? "AM" : "PM";

    hourElement.textContent = hour;
    minuteElement.textContent = minute;
    secondElement.textContent = second;
    amPmElement.textContent = amPm;
}, 1000)






