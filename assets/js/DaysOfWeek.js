var today = new Date();
        var dd = today.getDate();   //Get the day as a number (1-31)
        var mm = today.getMonth();   //Get the month as a number (0-11)
        var yyyy = today.getFullYear();     //Get the year as a four digit number (yyyy)
        var weekday=today.getDay();   //Get the weekday as a number (0-6)
        var hh=today.getHours();
        var mn=today.getMinutes();
        weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        weekends = ['Happy Weekend :)', 'Good Bye Weekend!', '3 more days left for Weekend!', 'Weekend is near!', 'Weekend is nearer!', 'Weekend is nearerer!', 'Yay! Weekend is here ..'];
        document.getElementById("date").innerHTML = dd + "/" + mm + "/" + yyyy + "&nbsp; " + hh + ":" + mn;
        document.getElementById("day").innerHTML = weekdays[weekday];
        document.getElementById("week").innerHTML = weekends[weekday];
        
        if (weekday==0 || weekday==6){
            console.log("Yay!!!! Weekend :)")
            console.log("%c WARNING: Going to sleep on Sunday cause Monday!","color: yellow; background:red; font-family:monospace; font-size: 20px");
        }
        else if(weekday==1){
            console.log("Good Bye! Weekend :(")
        }
        else{ 
            console.log("Normal Week day!");
            console.log(`%c ${weekday} days left for Sunday!!`,"color: yellow; background:red; font-family:monospace; font-size: 20px");
        }
        if(hh>=6 && hh<12){
            url='../assets/Images/dow-3.mp4';
        }else if(hh>=12 && hh<18){
            url='../assets/Images/dow-1.mp4';
        }else if(hh>=18 && hh<24){
            url='../assets/Images/dow-4.mp4';
        }else{
            url='../assets/Images/dow-2.mp4';
        }
        document.getElementById("bgvid").innerHTML = '<source src="' + url + '" type="video/mp4">';