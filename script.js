/* Created by Tivotal */

let hourTxt = document.querySelector(".hour");
let minTxt = document.querySelector(".min");
let secTxt = document.querySelector(".sec");
let ampmTxt = document.querySelector(".ampm");
let dayTxt = document.querySelector(".day2");
let dateTxt = document.querySelector(".date2");
let monthTxt = document.querySelector(".month2");
let yearTxt = document.querySelector(".year2");

setInterval(() => {
  let date = new Date();

  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  let label;
  label = hour < 12 ? "AM" : "PM";

  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;

  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  hourTxt.innerText = hour;
  minTxt.innerText = mins;
  secTxt.innerText = sec;

  ampmTxt.innerText = label;


  let days = date.getDay();
  switch (days) {
    case 0: 
      days = 'Sunday';
      break;
    
    case 1: 
      days = 'Monday';
      break;

    case 2: 
      days = 'Tuesday';
      break;

    case 3: 
      days = 'Wednesday';
      break;

    case 4: 
      days = 'Thursday';
      break;

    case 5: 
      days = 'Friday';
      break;

    case 6: 
      days = 'Saturday';
      break;
  }

  let dates = date.getDate();

  dates = dates < 10 ? "0" + dates : dates;

  let month = date.getMonth();
  switch (month) {
    case 0:
      month = 'January';
      break;

    case 1:
      month = 'February';
      break;

    case 2:
      month = 'March';
      break;

    case 3:
      month = 'April';
      break;

    case 4:
      month = 'May';
      break;

    case 5:
      month = 'June';
      break;

    case 6:
      month = 'July';
      break;

    case 7:
      month = 'August';
      break;

    case 8:
      month = 'September';
      break;

    case 9:
      month = 'October';
      break;

    case 10:
      month = 'November';
      break;

    case 11:
      month = 'December';
      break;
  }

  let year = date.getFullYear();

  dayTxt.innerText = days;
  dateTxt.innerText = dates;
  monthTxt.innerText = month;
  yearTxt.innerText = year;
}, 1000);