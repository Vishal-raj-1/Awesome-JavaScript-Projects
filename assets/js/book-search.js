// function to get the book

const box = document.getElementById("box");

function getbook() {
  box.innerHTML = ''
  getimg()
}

const getimg = async () => {
  var img = '';
  var ur = '';
  var author = '';

  const options = ['novel', 'jokes', 'story', 'maths', 'art', 'data', 'english', 'php', 'sql']
  var num = Math.floor(Math.random() * 8)
  const search = document.getElementById("search").value || options[num];
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
  
  const res = await fetch(url);
  const data = await res.json();
  for (let i = 0; i < data.items.length; i++) {

    const box = document.getElementById("box");
    const each = document.createElement('div')
    let title = document.createElement("h4");
    let img = document.createElement('p')
    title1 = `${data.items[i].volumeInfo.title}<br>`

    img1 = `<p><a  href='${data.items[i].volumeInfo.infoLink}' ><img src='${data.items[i].volumeInfo.imageLinks.thumbnail}'><br><br>Read the book  </a></p>`

    title.classList.add('title')
    each.classList.add('each')
    title.innerHTML = title1;
    img.innerHTML = img1
    each.appendChild(title)
    each.appendChild(img)
    box.appendChild(each)

  }
}