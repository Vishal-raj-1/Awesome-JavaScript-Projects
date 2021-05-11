$(document).ready( function(){
config();
var databse;
function config(){
    var config = {
      apiKey: "AIzaSyA8BWQbLE--KpLgmpJM3bmDJG_IkIPqWJA",
      authDomain: "train-schedular-c7a4a.firebaseapp.com",
      databaseURL: "https://train-schedular-c7a4a.firebaseio.com",
      projectId: "train-schedular-c7a4a",
      storageBucket: "train-schedular-c7a4a.appspot.com",
      messagingSenderId: "764385867751"
    };
    firebase.initializeApp(config);
  
  database = firebase.database();
}

  $("#train-submit").click(function (){
    event.preventDefault();
    checkInputFieldsForNotNull();
  });
  
  trial();
  setInterval( function(){
    $('#table-body').remove();
    var newTable = $('<tbody id="table-body"></tbody');
    $("#table").append(newTable);
    trial();
  }, 100);

function trial(){
    var trainName;
    var trainDestination;
    var trainTimeFirst;
    var trainFrequency;

  database.ref("trains").on("child_added", function (snapshot) {
    var childKey = snapshot.key;
    var childData = snapshot.val();

    var trainName = snapshot.val().trainName;
    var trainDestination = snapshot.val().trainDestination;
    var trainFrequency = snapshot.val().trainFrequency;
    var trainTimeFirst = snapshot.val().trainTime;


    //Current time in minutes ........................ good
    var currentTimeInMins = currentTimeInMins();
    function currentTimeInMins(){
        var currentHour = moment().get("hour");
        var currentMinutes = moment().get("minutes");
        var currentTimeString = currentHour + ":" + currentMinutes;
        var currentTime = moment(currentTimeString, "HH:mm").format("HH:mm");
        var currentTimeInMins = moment.duration(currentTime).asMinutes(); ////........
        return currentTimeInMins;
    }

    //First train time converted in minutes .................... good
    var firstTrainTimeInMins = firstTrainTimeInMins();
    function firstTrainTimeInMins(){
        var firstTrainTimeInMins = moment(trainTimeFirst, "HH:mm").format("HH:mm");
        firstTrainTimeInMins = moment.duration(firstTrainTimeInMins).asMinutes();
        return firstTrainTimeInMins;
    }

    //Time left or mins away from train arrival 
    var minsAway = minsAway();
  
    function minsAway(){
        if (firstTrainTimeInMins > currentTimeInMins ){
            var timeUntilMidnight = (1440-firstTrainTimeInMins);
            var firstTrainAndCurrentTimeDuration = timeUntilMidnight + currentTimeInMins;
            var minsLeftAfterMaxTrips = firstTrainAndCurrentTimeDuration % trainFrequency;
            var minsAway = trainFrequency - minsLeftAfterMaxTrips;
            return minsAway;
        }else{
            var differenceCurrentTimeAndFirstTrain = currentTimeInMins - firstTrainTimeInMins;
            var minsPastAfterMaxTrips = differenceCurrentTimeAndFirstTrain % trainFrequency;
            var minsAway = trainFrequency - minsPastAfterMaxTrips;
            return minsAway;
        }
    }

    //Next arrival train arrival time
    var nextArrival = nextArrival();
    function nextArrival(){
        var nextArrivalInMins = currentTimeInMins + minsAway;
        var nextArrivalFormatted = moment.duration(nextArrivalInMins, 'minutes');
        var nextArrivalInHrsAndMins = nextArrivalFormatted.format("hh:mm");
        var nextArrivalStandard = moment(nextArrivalInHrsAndMins, 'HH:mm').format('hh:mm a')

            return nextArrivalStandard;
    }
    var deleteButton = $('<td><span class="glyphicon glyphicon-trash"></span></td>').click(function () {
        // database.ref("trains").remove(childKey);
        var nodeToBeDeleted = firebase.database().ref("trains/" + childKey);
        nodeToBeDeleted.remove().then( function (){
            console.log("data deleted");
        }).catch( function(error){
            console.log("Failed to remove");
        });
    });

    var editButton = $('<td><span class="glyphicon glyphicon-edit"></span></td>').click(function () {
        // pouplateDataInformForEdit();
        updateData();
    });

       


    function pouplateDataInformForEdit(){
        database.ref("trains" +"/"+childKey).on("value", function (snapshot) {

            var childData = snapshot.val();
            var trainName = snapshot.val().trainName;
            var trainDestination = snapshot.val().trainDestination;
            var trainFrequency = snapshot.val().trainFrequency;
            var trainTimeFirst = snapshot.val().trainTime;

            $("#train-name").val(trainName);
            $("#train-destination").val(trainDestination);
            $("#train-time").val(trainTimeFirst);
            $("#train-frequency").val(trainFrequency);

        });
    }

        function updateData(){
            $("#submit-button").hide();
            $("#update-button").show();
            $("#form-panel").removeClass("form-panel-body");
            $("#form-panel").addClass("form-panel-update");
            pouplateDataInformForEdit();

            $("#train-update").click(function (){
                var trainName_update =  $("#train-name").val().trim();
                var trainDestination_update = $("#train-destination").val().trim();
                var trainTimeFirst_update = $("#train-time").val().trim();
                var trainFrequency_update = $("#train-frequency").val().trim();

                var nodeToBeUpdated = firebase.database().ref("trains/" + childKey);
                nodeToBeUpdated.update({
                    trainName : trainName_update,
                    trainDestination : trainDestination_update,
                    trainTime : trainTimeFirst_update,
                    trainFrequency : trainFrequency_update                
               });   
               
            })
        }
        

    var newRows;
    
    if(minsAway == 1){
        var newRows = $('<tr><td style="width: 24.66%">' + trainName + '</td><td style="width: 21.66%">'
        + trainDestination + '</td><td style="width: 14.66%">'
        + trainFrequency + " Mins" + '</td><td style="width: 14.66%">'
        + nextArrival + '</td><td style="width: 12.66%">'
        + "Arriving ..." +'</td></tr style="width: 12.66%">');
    }else{
        var newRows = $('<tr><td style="width: 24.66%">' + trainName + '</td><td style="width: 21.66%">'
        + trainDestination + '</td><td style="width: 14.66%">'
        + trainFrequency +  " Mins" +'</td><td style="width: 14.66%">'
        + nextArrival + '</td><td style="width: 12.66%">'
        + minsAway + " Mins" +'</td></tr style="width: 12.66%">');
    }

// deleteButton.append(editButton);
// newRows.append(deleteButton);
newRows.append(editButton);
newRows.append(deleteButton);
$("#table-body").prepend(newRows);
});
}


//Function for clearing the input fields
function clearInputFields(){
    $('input[class="form-control"]').each(function (){
        $(this).val('');
    });
}

function checkInputFieldsForNotNull(){
    var trainName =  $("#train-name").val().trim();
    var trainDestination = $("#train-destination").val().trim();
    var trainTimeFirst = $("#train-time").val().trim();
    var trainFrequency = $("#train-frequency").val().trim();

    var firstTrainHrs = parseInt(trainTimeFirst.substring(0,2));
    var firstTrainMins = parseInt(trainTimeFirst.substring(3,5));

    if (trainName == "" || trainDestination == "" || trainTimeFirst == "" || trainFrequency == ""){
        alert("Please fill up all the fields or fill in correct format");
    }else if (firstTrainHrs > 24 || firstTrainMins > 59 || trainTimeFirst.indexOf(":") !== 2){
        alert("Please enter values in correct format-  First train time should be between 00:00 - 23:59 and the freqeuncy should be a numer")
    }
    else{
        trainName =  $("#train-name").val().trim();
        trainDestination = $("#train-destination").val().trim();
        trainTimeFirst = $("#train-time").val().trim();
        trainFrequency = $("#train-frequency").val().trim();
    clearInputFields();
    database.ref("trains").push({
        trainName : trainName,
        trainDestination : trainDestination,
        trainTime : trainTimeFirst,
        trainFrequency : trainFrequency
    });
   
    }
}

}); // Document. ready closing

//Handle errors 
//make editable