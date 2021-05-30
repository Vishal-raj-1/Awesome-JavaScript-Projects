
let Input = document.getElementById("datatype")
let form = document.getElementById("form");



form.addEventListener('submit', (e) => {

    e.preventDefault();
    const data = JSON.stringify({
        "search": `${Input.value}`
    });;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    let TrainData = ""
    TrainData += "<th>" + "Train Name" + "</th>"
    TrainData += "<th>" + "Destination Code" + "</th>"
    TrainData += "<th>" + "Destination Name" + "</th>"
    TrainData += "<th>" + "Source Name" + "</th>"
    TrainData += "<th>" + "Source Code" + "</th>"
    TrainData += "<th>" + "Train Id" + "</th>"


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let Train_Data = JSON.parse(this.responseText);
            let Train_info = Train_Data.train_lists;


            document.getElementById("heading").innerHTML = TrainData;
            let temp = "";
            Train_info.forEach(element => {
              
                    console.log(element)
                    temp += "<tr>"
                    temp += "<td>" + element.display + "</td>"
                    temp += "<td>" + element.destination_code + "</td>"
                    temp += "<td>" + element.destination_name + "</td>"
                    temp += "<td>" + element.source_name + "</td>"
                    temp += "<td>" + element.source_code + "</td>"
                    temp += "<td>" + element.id + "</td>"
                    temp += "</tr>"
                    document.getElementById("data").innerHTML = temp;
                });
            
            }
    });

    xhr.open("POST", "https://indian-railway-live-train.p.rapidapi.com/train-lists?trainNumber=2956");
    xhr.setRequestHeader("x-rapidapi-key", "5124ab8331msh681002f3e0b9ec5p17bcd3jsn460e92a93850");
    xhr.setRequestHeader("x-rapidapi-host", "indian-railway-live-train.p.rapidapi.com");

    xhr.send(data);




})
