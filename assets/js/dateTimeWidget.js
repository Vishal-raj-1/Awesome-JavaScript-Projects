// START CLOCK SCRIPT

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours() % 12,
    hou = hou ? hou : 12,
    mo = now.getMonth(),
    date = now.getDate(),
    day = now.getDay(),
    yr = now.getFullYear();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var ampm = now.getHours() >= 12 ? " PM" : " AM";

  corr = [days[day], months[mo], date, yr, hou.pad(2), min.pad(2), sec.pad(2)];

  document.getElementById("day").innerHTML = `${days[day]},`;

  document.getElementById("date").innerHTML = `${date} ${months[mo]} ${yr}`;

  document.getElementById("time").innerHTML = `${hou.pad(2)} : ${min.pad(
    2
  )} : ${sec.pad(2)} ${ampm}`;
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT
