
const Gif_Holder = document.getElementById("Gif_Holder")
const Giphy_sticker = document.getElementById("Gif_sticker")
const Giphy_Search = document.getElementById("Gif_Search")
const Gif_input = document.getElementById("Gif_input")
const Gif_Search = document.getElementById("Gif_btn")
const Gifs_Avatar=document.getElementById("Avatar")


const Giphy = () => {

  fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then((response) => {
      return response.json()
    }
    )
    .then((Gifsdata) => {

const Index = Math.floor(Math.random()*10+30)
      const Avatar= `<img src="${Gifsdata.data[Index].user.avatar_url}"class="avatar" alt="img">`
      Gifs_Avatar.innerHTML=Avatar

      var newData = Gifsdata.data
      let Gifs = ""
      newData.forEach((element) => {
       console.log(element)
        Gifs += `<div class="card" style="width: 18rem; height:fit-content;">`
        Gifs += `<div class= Gif_img> <img class="card-img-top" src="${element.images.fixed_height.url}"alt="${element.title}"> </div>`
        Gifs += `  <div class="card-body">`
        Gifs += `<h5 class="card-title">${element.title}</h5>`
        Gifs += `</div>`
        Gifs += "</div>"
        Gif_Holder.innerHTML = Gifs;
      });

    })

}

const Gifs_sticker = () => {

  fetch('https://api.giphy.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC')
    .then((response) => {
      return response.json()
    }
    )
    .then((Gifsdatas) => {

      var newData = Gifsdatas.data
      let Gif_sticker = ""
      newData.forEach((element) => {
        //console.log(element)
        Gif_sticker += `<div class="card" style="width: 18rem; height:fit-content;">`
        Gif_sticker += `<div class= Gif_img> <img class="card-img-top" src="${element.images.fixed_height.url}"alt="${element.title}"> </div>`
        Gif_sticker += `  <div class="card-body">`
        Gif_sticker += `<h5 class="card-title fs-3">${element.title}</h5>`
        Gif_sticker += `</div>`
        Gif_sticker += "</div>"

        Giphy_sticker.innerHTML = Gif_sticker
      });
    })

}

Giphy()
Gifs_sticker()


//Search Function 

Gif_Search.addEventListener('click', () => {

  
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${Gif_input.value}`)
    .then(response => {

      return response.json()

    })
    .then(Search_data => {
      if (Search_data.data.length == 0) {

        const Error = `<div class="Error"> 
           <p> 
            ${Gif_input.value}  GIFs can't Fecth Right Now Check Afetr Some Time! 
             Maybe Network Problem
           </p>
          </div>`


        Giphy_Search.innerHTML = Error
      }
      else {

        var newData = Search_data.data
        let Gif_Search = ""
        newData.forEach((element) => {
          Gif_Search += `<div class="card" style="width: 18rem; height:fit-content;">`
          Gif_Search += `<div class= Gif_img> <img class="card-img-top" src="${element.images.fixed_height.url}"alt="${element.title}"> </div>`
          Gif_Search += "</div>"
          Giphy_Search.innerHTML = Gif_Search
        });
      }
    })

    .catch(err => {
      console.error(err);
    });

})
