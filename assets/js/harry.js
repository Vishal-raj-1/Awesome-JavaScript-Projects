let getUrl = "https://hp-api.herokuapp.com/api/characters";
let container = document.querySelector('.container');

let searchBar = document.querySelector('#searchbar');
//let char = [];
//console.log(char);


function getData(){
    fetch(getUrl)
    .then((response) => {
         return  herry =  response.json();
         //console.log(herry)
    }).then((data) => {
      let char = data;
      searchBar.addEventListener('keyup', function(e){
        let searchString = e.target.value
       // console.log(searchString)
        let fillterCharecter = char.filter((char) => {
            return(
                 char.actor.includes(searchString)||
                 char.name.includes(searchString)
            );
        })
        console.log(fillterCharecter);
     });

     

      var actor = "";
      char.forEach(function(el){
            actor += `
            
            <div class="charecter-card">
        <div class="charecter-container box-one">
            <img src="${el.image}" id="charecter-img">
            <h4 id="actor-name">${el.actor}</h4>
        </div>
        <div class="charecter-details">
            <div class="box-two">
                <ul>
                    <li>Name : <span class="charecter-name">${el.name}</span></li>
                    <li>DOB : <span class="charecter-birth">${el.dateOfBirth}</span></li>
                    <li>Gender : <span class="charecter-gender">${el.gender}</span></li>
                    <li>Hair color : <span class="charecter-hair">${el.hairColour}</span></li>
                </ul>
            </div>
            <div class="box-three">
                <ul>
                    <li>House : <span class="charecter-name">${el.house}</span></li>
                    <li>Alive : <span class="charecter-birth">${el.alive}</span></li>
                    <li>Hogwart Student : <span class="charecter-gender">${el.hogwartsStudent}</span></li>
                </ul>
            </div>
        </div>
    </div>
            `;
      });
            container.innerHTML = actor;
            console.log(char);
    })
    
}

getData();