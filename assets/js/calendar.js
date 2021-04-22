const obj = new Date();
var date = obj.getDate();
var month = obj.getMonth();
var year = obj.getFullYear();
const d = date;
const m = month;
const y = year;
var hig = "today";

document.getElementById("prev").onclick = function () {
    if (month == 0) {
        month = 12;
        year -= 1;
    }
    month -= 1
    create_callander(0, month, year)
};
document.getElementById("next").onclick = function () {
    if (month == 11) {
        month = -1;
        year += 1;
    }
    month += 1
    create_callander(0, month, year)
};

function get_month(m) {
    switch (m) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
    }
}

to_day();

function create_callander(dd, mm, yyyy) {


    const day = new Date(yyyy, mm, 1).getDay();
    const totalday = new Date(yyyy, mm + 1, 0).getDate();
    var out = " "
    out += `<h1 class="month">${get_month(mm)}  ${yyyy} </h1> <hr>`;

    out += `<table>
    <tr>        
    <th>Sun</th>        
    <th>Mon</th>        
    <th>Tue</th>        
    <th>Wed</th>       
    <th>Thu</th>       
    <th>Fri</th>        
    <th>Sat</th>      
    </tr> `;

    var k = -1;
    var j = 0;
    var p = 5;
    if (day == 0)
        k = 1;
    if (((day == 6) && (totalday > 29)) || ((day == 5) && (totalday > 30)))
        p = 6;

    for (; j < p; ++j) {
        out += "<tr> ";
        for (var i = 0; i < 7; ++i) {
            if (k == dd)
                out += "<td id=" + hig + "> ";
            else
                out += "<td> ";
            if (k > 0) {
                out += `${k}`;
                k++;
            } else if (day == (i + 1) % 7 && k > -2) {
                k = 1;
            }
            out += "</td> ";
            if (k > totalday) {
                k = -50;
            }
        }
        out += "</tr> ";

    }
    out += "</table>";
    var callender = document.getElementById("cala")
    callender.innerHTML = out;
}
function go_to () {
    hig="goto";
    date=document.getElementById("date").value;
    month=month_to_num(document.getElementById("month").value);
    year=document.getElementById("year").value;
    create_callander(date,month,year);
}
function to_day() {
    hig = "today";
    date = d;
    month = m
    year = y
    create_callander(date, month, year);
}

function month_to_num(m) {
    switch (m) {
        case "January": return 0;
        case "February": return 1;
        case "March": return 2;
        case "April": return 3;
        case "May": return 4;
        case "June": return 5;
        case "July": return 6;
        case "August": return 7;
        case "September": return 8;
        case "October": return 9;
        case "November": return 10;
        case "December": return 11;
    }
}