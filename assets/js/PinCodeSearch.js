document.querySelector('#zipForm').addEventListener("submit", getLocationInfo)
document.querySelector('body').addEventListener('click', deleteLocation)

function getLocationInfo(e) {
  const zip = document.querySelector('.input').value
  console.log(zip);

  fetch(`https://api.postalpincode.in/pincode/${zip}`)
  .then(response => {
    console.log(response);
    console.log(response.status);
    return response.json()
  })
  .then(data => {
    console.log(data);
    let output = "";
    if(data[0].PostOffice == null) {
      console.log("Hello");
      showIcon("remove")
      document.querySelector("#output").innerHTML = `
      <article class="message is-danger">
      <div class="message-body">Invalid Zipcode, please try again</div></article>`
    } else {
      showIcon('check')
    data[0].PostOffice.forEach((post) => {
      console.log(post);
      output += `
        <article class="message is-secondary is-dark">
          <div class="message-header ">
            <p><i class="fa fa-map-pin"></i> &nbsp; Location Info</p>
            <button class="delete"></button>
          </div>
          <div class="message-body mbody">
            <ul>
              <li><strong>Name : &nbsp; </strong>${post.Name}</li>
              <li><strong>BranchType : &nbsp; </strong>${post.BranchType}</li>
              <li><strong>DeliveryStatus : &nbsp; </strong>${post.DeliveryStatus}</li>
              <li><strong>Circle : &nbsp; </strong>${post.Circle}</li>
              <li><strong>District : &nbsp; </strong>${post.District}</li>
              <li><strong>Division : &nbsp; </strong>${post.Division}</li>
              <li><strong>Region : &nbsp; </strong>${post.Region}</li>
              <li><strong>State : &nbsp; </strong>${post.State}</li>
              <li><strong>Country : &nbsp; </strong>${post.Country}</li>
            </ul>
          </div>
        </article>
      `
    })
     document.querySelector('#output').innerHTML = output
    }
  })

  e.preventDefault()
}

function showIcon(icon) {
  document.querySelector('.icon-remove').style.display = 'none'
  document.querySelector('.icon-check').style.display = 'none'

  document.querySelector(`.icon-${icon}`).style.display = 'inline-flex'
}

function deleteLocation(e) {
  if(e.target.className == "delete") {
    document.querySelector('.message').remove()
    document.querySelector('.zip').value = ""
    document.querySelector('.icon-check').style.display = 'none'
  }
}