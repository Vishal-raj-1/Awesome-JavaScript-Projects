const card = document.querySelector('.card');
const title = card.querySelector('span');
const para = card.querySelector('p');
const wifiIcon = card.querySelector('.icon');

function isOnline(no, yes) {
  var xhr = XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHttp');
  xhr.onload = function () {
    if (yes instanceof Function) {
      yes();
    }
  };
  xhr.onerror = function () {
    if (no instanceof Function) {
      no();
    }
  };
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts.php', true);
  xhr.send();
}

isOnline(
  function () {
    console.log('offline');
    card.classList.add('offline');
    title.innerText = `You're offline now`;
    para.innerHTML = 'Opps! Internet is disconnected.';
    wifiIcon.innerHTML =
      '<img src="../assets/svg/bx-wifi-off.svg" alt="wifi on">';
  },
  function () {
    console.log('online');
    card.classList.remove('offline');
    title.innerText = `You're online now`;
    para.innerHTML = 'Hurray! Internet is connected.';
    wifiIcon.innerHTML = '<img src="../assets/svg/bx-wifi.svg" alt="wifi on">';
  }
);
