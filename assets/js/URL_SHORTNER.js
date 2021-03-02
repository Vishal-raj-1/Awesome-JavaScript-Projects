var form = document.getElementById('url-shortner');
form.addEventListener('submit', function(event){
  event.preventDefault();
  var loader = document.getElementsByClassName('loading-spinner')[0].style;
  var api_url = 'https://is.gd/create.php';
  var formData = new FormData(form);
  var request = queryApi(api_url, formData);

  loader.display = 'block';
  
  request.onreadystatechange = function () {
    if (request.readyState == 4 || request.status == 200) {
      var response = JSON.parse(request.response);
      if(typeof JSON.parse(request.response).errormessage === 'undefined') {
        showResponse(response.shorturl, response.shorturl);
      } else {
        showResponse('#', response.errormessage);
      }
      
      var output = document.getElementById('shortened-url').style;
      output.opacity = 1;
      (function fade(){(output.opacity-=.1)<1?output.display="block":setTimeout(fade, 250)})();
      loader.display = 'none';
    }
  };
});

function queryApi(url, formData) {
  var request = new XMLHttpRequest();
  request.open('GET', url + '?format=json&url=' + formData.get('url'), true);
  request.send(null);
  return request;
}

function showResponse(url, label) {
  document.getElementById('shortened-url').innerHTML = label;
  document.getElementById('shortened-url').href = url;
}