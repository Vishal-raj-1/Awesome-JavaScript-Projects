
const UserImage = document.getElementById("img");
const UserName = document.getElementById("name");
const User_Country = document.getElementById("country");
const User_City = document.getElementById("city");
const User_Dob = document.getElementById("DOB");
const User_Email = document.getElementById("Email");
const User_PhoneNumber = document.getElementById("number");
const User_Age = document.getElementById("Age");
const User_Gender = document.getElementById("Gender");
const Button = document.getElementById("btn")


const IndianData =[ 
{
  Name: 'Vanshika',
  Gender: 'Female',
  Age: 20,
  Country: 'India',
  City: 'Jaipur',
  DOB: `12-8-2000`,
  phonenumber: 878227,
  Email_Address: 'vanshika221@gmail.com',
  image: `https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg`
},
{
  Name: 'Vani',
  Gender: 'Female',
  Age: 22,
  Country: 'India',
  City: 'google',
  DOB: `12-8-1998`,
  phonenumber: 878227162,
  Email_Address: 'vani2@exmpal.com',
  image: `https://cdn.pixabay.com/photo/2015/07/29/09/02/gorgeous-girl-865621_960_720.jpg`
},
{
  Name: 'Kajal',
  Gender: 'Female',
  Age: 25,
  DOB: `10-11-1995`,
  Country: 'India',
  City: 'google',
  phonenumber: 877788999,
  Email_Address: 'kajal21@exmpal.com',
  image: `https://cdn.pixabay.com/photo/2014/01/02/17/48/child-237705_960_720.jpg`
},
{
  Name: 'Vishal',
  Gender: 'Male',
  Age: 21,
  Country: 'India',
  City: 'Mumbai',
  DOB: `2-10-1990`,
  Email_Address: 'vishal221@exmpal.com',
  phonenumber: 9999999,
  image: `https://cdn.pixabay.com/photo/2016/03/27/17/40/black-and-white-1283231_960_720.jpg`
},
{
  Name: 'Ajay',
  Gender: 'Male',
  Age: 10,
  Country: 'India',
  City: 'Dehli',
  DOB: `2-10-2009`,
  Email_Address: 'Exyz@exmpal.com',
  phonenumber: 9999999,
  image: `https://cdn.pixabay.com/photo/2015/04/05/18/10/smiling-indian-boy-708334_960_720.jpg`
},
{
  Name: 'Chinu',
  Gender: 'Female',
  Age: 19,
  Country: 'India',
  City: 'Banglore',
  DOB: `2-10-2001`,
  Email_Address: 'Female@exmpal.com',
  phonenumber: +099999999,
  image: `https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg`
},
{
  Name: 'Yugal',
  Gender: 'Male',
  Age: 21,
  Country: 'India',
  City: 'Mumbai',
  DOB: `2/10/1990`,
  Email_Address: 'ZxY@exmpal.com',
  phonenumber: 9999999666,
  image: `https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg`
},
];

Indian_USer()


Button.addEventListener('click', () => {
  Random_USer();
})

function Random_USer() {

  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      UserName.innerText = data.results[0].name.first
      User_Country.innerText = data.results[0].location.country
      User_City.innerText = data.results[0].location.city
      User_Dob.innerText = data.results[0].dob.date
      User_Age.innerText = data.results[0].dob.age
      User_Gender.innerText = data.results[0].gender
      User_Email.innerText = data.results[0].email
      User_PhoneNumber.innerText = data.results[0].cell
      UserImage.innerHTML = ` <img src=" ${data.results[0].picture.large}" alt="img" srcset="" width="150px" height="150px">`
      console.log(data);
    }

  });

}
function Indian_USer(Data) {

  var Indexnumber= Math.floor(Math.random()*4)
   UserName.innerText = IndianData[Indexnumber].Name
   User_Country.innerText = IndianData[Indexnumber].Country
   User_City.innerText = IndianData[Indexnumber].City
   User_Dob.innerText = IndianData[Indexnumber].DOB
   User_Email.innerText = IndianData[Indexnumber].Email_Address
   User_Age.innerText = IndianData[Indexnumber].Age
   User_Gender.innerText = IndianData[Indexnumber].Gender
   User_PhoneNumber.innerText = IndianData[Indexnumber].phonenumber
   UserImage.innerHTML = ` <img src=" ${IndianData[Indexnumber].image}" alt="img" srcset="" width="150px" height="150px">`

  console.log(Data)

}

