const init = function(){
    document.getElementById('button-send').addEventListener('click', send);
}
const send = function(ev){
    ev.preventDefault(); 
    ev.stopPropagation();
    
    var longUrl = document.getElementById('input-longurl').value;
    //console.log(longUrl);

    if(validateUrl(longUrl)) {
        const Http = new XMLHttpRequest();
        const baseUrl='https:/tinyurl.com/api-create.php?url=';

        var mLong = modifyUrl(longUrl);

        let url = baseUrl + mLong;
        Http.open("GET", url);
        Http.send();
         
        Http.onreadystatechange = function() {
            document.getElementById('msg1').textContent = 'Long Url :';
            document.getElementById('longurl').textContent = longUrl;
            document.getElementById('longurl').href = longUrl;

            document.getElementById('msg2').textContent = 'Short Url :';
            document.getElementById('shorturl').textContent = this.responseText;
            document.getElementById('shorturl').href = this.responseText;

        }
    }
    else {
        document.getElementById('msg1').textContent = 'Note :';
        document.getElementById('longurl').textContent = 'Invadlid Link';
        document.getElementById('longurl').removeAttribute("href");
        document.getElementById('msg2').textContent = '';
        document.getElementById('shorturl').textContent = 'https:// or http:// format only';
        document.getElementById('shorturl').removeAttribute("href");
    }
}


function validateUrl(url1) {
    var url = String(url1);
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return true;
    } else {
      return false;
    }
  }
  function modifyUrl(url) {
    if (url.startsWith("http://") ) {
        return "http:/" + url.substring(7,url.length);
    } 
    if(url.startsWith("https://")) {
        return "https:/" + url.substring(8,url.length);
    } 
  }
  document.addEventListener('DOMContentLoaded', init);