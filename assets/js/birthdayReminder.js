//// HEADING //////
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

document.getElementById("heading").innerHTML = today.toLocaleDateString(
  "en-US",
  options
);

//// DATA /////

// for making birth date to current date to show content
// you can change birth dates to current dates to see person in results
var d = new Date();
var currentMonthAndDate =
  (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
  "/" +
  d.getDate();

// Date :  MM/DD/YYYY
const data = [
  {
    id: 1,
    name: "Bertie Yates",
    date: "01/25/2000",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    date: currentMonthAndDate + "/1997", // changing date and month to current date to show initial content
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    date: currentMonthAndDate + "/1996", // changing date and month to current date to show initial content
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    date: "09/11/1996",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    date: "05/25/1996",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

/// TODAY BIRTHDAY DATA FILTER////

var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person, index) => {
  const { date } = person;
  return (
    parseInt(date.substring(3, 5)) === currentDate &&
    parseInt(date.substring(0, 2)) === currentMonth + 1
  );
});

/// DISPLAY ////

var noOfBirthdays = document.getElementById("noOfBirthdays");
noOfBirthdays.innerHTML = todayData.length + " birthdays today";

var people = document.getElementById("people");

todayData.forEach((person) => {
  const { id, name, date, image } = person;

  var article = document.createElement("article");
  article.setAttribute("class", "person");

  var img = new Image();
  img.src = image;
  img.setAttribute("alt", name);

  var info = document.createElement("div");

  var h4 = document.createElement("h4");
  h4.setAttribute("id", "name");
  h4.innerHTML = name;

  var p = document.createElement("p");
  var dob = new Date(date);
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  p.innerHTML = age + " years";

  info.appendChild(h4);
  info.appendChild(p);

  article.appendChild(img);
  article.appendChild(info);

  people.appendChild(article);
});

//// clear ////

function clearAll() {
  people.innerHTML = "";
  noOfBirthdays.innerHTML = "0 birthdays today";
}
