let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});


// for any particular city
const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`,
   
            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            tempicon.src="../assets/Images/weather_icons/thunderstorm.svg"
        }
       else  if(id<400 && id>300)
        {
            tempicon.src="../assets/Images/weather_icons/cloud-solid.svg"
        }
       else if(id<600&& id>500)
        {
            tempicon.src="../assets/Images/weather_icons/rain.svg"
        }
       else  if(id<700 && id>600)
        {
            tempicon.src="../assets/Images/weather_icons/snow.svg"
        }
       else  if(id<800 && id>700)
        {
            tempicon.src="../assets/Images/weather_icons/clouds.svg"
        }
         else if(id==800)
        {
            tempicon.src="../assets/Images/weather_icons/clouds-and-sun.svg"
        }

   
    }
catch(error)
{
    alert('city not found');
}

};


// for current location
window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation)
{

    navigator.geolocation.getCurrentPosition((position)=>
    {

   
    
    long=position.coords.longitude;
    lat=position.coords.latitude;

        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd     `

        fetch(api).then((response)=>{

            return response.json();


        })

        .then (data =>
            {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                    if(id<300 && id>200)
                    {
                        tempicon.src="../assets/Images/weather_icons/thunderstorm.svg"
                    }
                   else  if(id<400 && id>300)
                    {
                        tempicon.src="../assets/Images/weather_icons/cloud-solid.svg"
                    }
                   else if(id<600&& id>500)
                    {
                        tempicon.src="../assets/Images/weather_icons/rain.svg"
                    }
                   else  if(id<700 && id>600)
                    {
                        tempicon.src="../assets/Images/weather_icons/snow.svg"
                    }
                   else  if(id<800 && id>700)
                    {
                        tempicon.src="../assets/Images/weather_icons/clouds.svg"
                    }
                     else if(id==800)
                    {
                        tempicon.src="../assets/Images/weather_icons/clouds-and-sun.svg"
                    }


                    console.log(data);
            })
}

    )}

})
