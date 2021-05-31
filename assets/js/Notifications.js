// utility function returning a random item from the input array
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const messageTitle = ["info", "success", "warning", "danger"];

const messageText = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quaerat.",
  "Ab asperiores inventore tempora maiores, est et magni harum maxime?",
  "Laboriosam, vel maxime. Doloremque saepe aut quis mollitia corporis illo?",
  "Cum eum magnam facere commodi quae voluptate suscipit doloribus architecto?",
  "Ipsa veniam tempora necessitatibus corporis voluptate nobis, ut quam magni.",
  "Veritatis obcaecati non dolorum vero? Ipsam aperiam optio sint dicta.",
  "Itaque quod amet a. Voluptate nostrum temporibus ipsa explicabo exercitationem.",
  "Quasi veritatis inventore mollitia ipsum, aut voluptatibus suscipit a labore.",
  "Iusto alias eius quae ducimus quibusdam veniam sint soluta nam!",
  "Corrupti temporibus sequi laboriosam alias magni? Nam consectetur amet odit!",
];

const notification = document.querySelector(".notification");

function dismissMessage() {
  notification.classList.remove("received");

  generateMessage();
}

function showMessage() {
  notification.classList.add("received");

  const button = document.querySelector(".notification__message button");
  button.addEventListener("click", dismissMessage, { once: true });
}

function generateMessage() {
  const delay = Math.floor(Math.random() * 1000) + 1500;
  const timeoutID = setTimeout(() => {
    const title = randomItem(messageTitle);
    const text = randomItem(messageText);

    const message = document.querySelector(".notification__message");

    message.querySelector("h1").textContent = title;
    message.querySelector("p").textContent = text;
    message.className = `notification__message message--${title}`;

    showMessage();
    clearTimeout(timeoutID);
  }, delay);
}

// immediately call the generateMessage function to kickstart the loop
generateMessage();
