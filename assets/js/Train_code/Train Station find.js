let form = document.getElementById("form");
let Input = document.getElementById("Location");
let table = document.getElementById('table')
let tablecontent = document.getElementById("tablecontent")

form.addEventListener('submit', e => {


    e.preventDefault();
    let InputEL = Input.value;

    const data = null;
    let StationDatial = '';
    var temp ="";
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    StationDatial+="<th>"+ "StationName"+ "</th>"
    StationDatial+="<th>"+ "StationCode"+ "</th>"
    document.getElementById("heading").innerHTML=StationDatial;

    xhr.addEventListener("readystatechange", function () {
       
       

        if (this.readyState === this.DONE) {
           
           
            let Station= JSON.parse(this.responseText);
            let stationsitems=Station.stations;
           
          
           console.log(stationsitems)
            
           stationsitems.forEach( element => {
                
            console.log(element)
                    temp+="<tr>";
                     temp+= "<td>"+element.stationName+"</td>"
                     temp+= "<td>"+element.stationCode+"</td>"
                     temp+="</tr>"

         
          
                     document.getElementById("data").innerHTML=temp;
             
        });
         
       


        }
    

    });

    xhr.open("GET", `https://indianrailways.p.rapidapi.com/findstations.php?station=${InputEL}`);
    xhr.setRequestHeader("x-rapidapi-key", "5124ab8331msh681002f3e0b9ec5p17bcd3jsn460e92a93850");
    xhr.setRequestHeader("x-rapidapi-host", "indianrailways.p.rapidapi.com");

    xhr.send(data);





})