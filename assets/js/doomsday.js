// Call SetupFunc when the page loads
document.addEventListener("DOMContentLoaded", SetupFunc);
let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// The Doomsday dates for each month
let doomsdayArrayLeapYear = [4, 1, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5];
let doomsdayArrayNotLeapYear = [3, 7, 7, 4, 2, 6, 4, 1, 5, 3, 7, 5];
let monthSelect;
let daySelect;
let yearSelect;
let calcBut;
let resultsBox;

function SetupFunc() {
    monthSelect = document.getElementById("month");
    daySelect = document.getElementById("day");
    yearSelect = document.getElementById("year");
    calcBut = document.getElementById("calcbut");
    resultsBox = document.getElementById("results");
    var thisYear = new Date().getFullYear();

    for (var i = 0; i <= 11; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(monthArr[i]));
        monthSelect.appendChild(option);
    }
    for (var j = 1; j <= 31; j++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(j));
        daySelect.appendChild(option);
    }
    for (var k = thisYear; k >= 1900; k--) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(k));
        yearSelect.appendChild(option);
    }
    calcBut.addEventListener("click", GetResults);
}

function GetResults() {
    let resultStr = "1. Divide the last 2 digits of year by 12 : ";

    // Get last 2 digits of the year
    let year2Digits = yearSelect.value.toString().substr(-2);

    // Year selected divided by 12
    let calc1 = Math.floor(year2Digits / 12);
    resultStr = resultStr + year2Digits + " / 12 = " + calc1 + "\n";
    resultStr = resultStr + "2. Get the difference between the years last 2 digits and the previous result * 12 : ";

    // Subtract previous calculation * 12 from the year selected
    let calc2 = year2Digits - calc1 * 12;
    resultStr = resultStr + " " + year2Digits + " - (" + calc1 + " * 12) = " + calc2 + "\n";

    // Divide previous calculation by 4
    let calc3 = Math.floor(calc2 / 4);

    resultStr = resultStr + "3. Divide previous result by 4 : " + calc2 + " / 4 = " + calc3 + "\n";

    // Get 1st digit of the year if it is 1 the anchor day is
    // Wednesday (3) and if 2 the anchor day is Tuesday (2)
    let firstDigitYear = String(yearSelect.value).toString().charAt(0);
    let anchorNum = firstDigitYear == 1 ? 3 : 2;
    let calc4 = calc1 + calc2 + calc3 + anchorNum;

    resultStr = resultStr + "4. Add all results plus the anchor day value : " + calc1 + " + " + calc2 + " + " + calc3 + " + " + anchorNum + " = " + calc4 + "\n";

    // Take modulus of 7 from previous result to get a value between
    // 0 and 6 representing the days of a week (The Doomsday)
    let calc5 = calc4 % 7;

    resultStr = resultStr + "5. Take the modulus of 7 from the previous result to get Doomsday : " + calc4 + " % 7 = " + calc5 + " (" + dayArr[calc5] + ")" + "\n";

    // Check if it is a leap year
    // Leap years are divisible by 4 unless it is divisible by
    // 100 and not divisible by 400
    let year = yearSelect.value;
    let leapYear = year % 4 == 0 ? true : false;
    if (year % 100 == 0 && year % 400 != 0) leapYear = false;
    resultStr = resultStr + "6. Is it a leap year? " + leapYear.toString() + "\n";

    // Find the day by adding or subtracting the Doomsday
    // calc5 is the index for the Doomsday in dayArr
    // Get the month index
    let day = daySelect.value;
    let monthSelected = monthSelect.value.toString();
    let monthIndex = monthArr.indexOf(monthSelected);
    let dayIndex;
    let doomsdayDay;

    resultStr = resultStr + "7. Add or Subtract previous result from the Doomsday number to find this dates day : " + calc5;

    // If it is a leap year I need to use the different set
    // of Doomsday dates
    if (leapYear) {
        // Get the Doomsday day which changes every month
        doomsdayDay = doomsdayArrayLeapYear[monthIndex];
    } else {
        doomsdayDay = doomsdayArrayNotLeapYear[monthIndex];
    }

    // Example Jan 1, 2001
    // Day (1) Doomsday Day (3) calc5 : Day Code (3/Wed)
    // dayIndex = calc5 - (3 - 1) = 1 / Monday
    if (day < doomsdayDay) {
        dayIndex = calc5 - (doomsdayDay - day);
        resultStr = resultStr + " - (" + doomsdayDay + " - " + day + ")";
    } else if (day > doomsdayDay) {
        // Example Jan 4, 2001
        // Day (4) Doomsday Day (3) calc5 : Day Code (3/Wed)
        // dayIndex = calc5 + (4 - 3) = 4 / Thursday
        dayIndex = calc5 + (day - doomsdayDay);

        // If dayIndex is greater than 7 convert its date to
        // the 0 through 7 format used by the dayArr
        if (dayIndex >= 7) {
            dayIndex = dayIndex % 7;
            resultStr = resultStr + " + (" + day + " - " + doomsdayDay + ") % 7";
        } else {
            resultStr = resultStr + " + (" + day + " - " + doomsdayDay + ")";
        }
    } else {
        dayIndex = calc5;
    }

    // If negative number flip to the end of the week and count down from there
    if (dayIndex < 0) dayIndex = 7 + dayIndex;

    resultStr = resultStr + " = " + dayIndex + "\n";
    resultStr = resultStr + monthSelected + " " + day + " " + year + " was a " + dayArr[dayIndex];
    resultsBox.innerHTML = resultStr;
}
