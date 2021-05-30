let form = document.getElementById("form");
let Input = document.getElementById("datatype")


form.addEventListener('submit', e => {

    e.preventDefault();


    const data = JSON.stringify({
        "search": `${Input.value}`
    });
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    let TrainData = ""
    TrainData += "<th>" + "Train Number" + "</th>"
    TrainData += "<th>" + "Train Name" + "</th>"
    TrainData += "<th>" + "From" + "</th>"
    TrainData += "<th>" + "Depart" + "</th>"
    TrainData += "<th>" + "Arrive Time" + "</th>"
    TrainData += "<th>" + "Depart Time" + "</th>"





    xhr.addEventListener("readystatechange", function () {


        if (this.readyState === this.DONE) {
            let Data = JSON.parse(this.responseText);
            console.log(Data);

            if (Data.length == 0) {
                document.getElementById("heading").innerHTML = `${Input.value} is not available in our data base,see later again`
            }

            else {
                document.getElementById("heading").innerHTML = TrainData;


                let temp = "";

                Data.forEach(element => {
                    console.log(element)
                    temp += "<tr>"
                    temp += "<td>" + element.train_num + "</td>"
                    temp += "<td>" + element.name + "</td>"
                    temp += "<td>" + element.train_from + "</td>"
                    temp += "<td>" + element.train_to + "</td>"
                    temp += "<td>" + element.data.arriveTime + "</td>"
                    temp += "<td>" + element.data.departTime + "</td>"
                    temp += "</tr>"
                    document.getElementById("data").innerHTML = temp;

                });
            }

        }
    });

    xhr.open("POST", `https://trains.p.rapidapi.com/`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", "5124ab8331msh681002f3e0b9ec5p17bcd3jsn460e92a93850");
    xhr.setRequestHeader("x-rapidapi-host", "trains.p.rapidapi.com");
    xhr.send(data);

})