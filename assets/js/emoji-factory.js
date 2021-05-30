const emoji = [
    "😀 Grinning Face",
    "😃 Grinning Face with Big Eyes",
    "😄 Grinning Face with Smiling Eyes",
    "😁 Beaming Face with Smiling Eyes",
    "😆 Grinning Squinting Face",
    "😅 Grinning Face with Sweat",
    "🤣 Rolling on the Floor Laughing",
    "😂 Face with Tears of Joy",
    "🙂 Slightly Smiling Face",
    "🙃 Upside-Down Face",
    "😉 Winking Face",
    "😊 Smiling Face with Smiling Eyes",
    "😇 Smiling Face with Halo",
    "🥰 Smiling Face with Hearts",
    "😍 Smiling Face with Heart-Eyes",
    "🤩 Star-Struck",
    "😘 Face Blowing a Kiss",
    "😗 Kissing Face",
    "😚 Kissing Face with Closed Eyes",
    "😙 Kissing Face with Smiling Eyes",
    "😋 Face Savoring Food",
    "😛 Face with Tongue",
    "😜 Winking Face with Tongue",
    "🤪 Zany Face",
    "😝 Squinting Face with Tongue",
    "🤑 Money-Mouth Face",
    "🤗 Hugging Face",
    "🤭 Face with Hand Over Mouth",
    "🤫 Shushing Face",
    "🤔 Thinking Face",
    "🤐 Zipper-Mouth Face",
    "🤨 Face with Raised Eyebrow",
    "😐 Neutral Face",
    "😑 Expressionless Face",
    "😶 Face Without Mouth",
    "😏 Smirking Face ",
    "😒 Unamused Face",
    "🙄 Face with Rolling Eyes",
    "😬 Grimacing Face ",
    "🤥 Lying Face ",
    "😌 Relieved Face ",
    "😔 Pensive Face",
    "😪 Sleepy Face",
    "🤤 Drooling Face",
    "😴 Sleeping Face",
    "😷 Face with Medical Mask",
    "🤒 Face with Thermometer",
    "🤕 Face with Head-Bandage",
    "🤢 Nauseated Face",
    "🤮 Face Vomiting",
    "🤧 Sneezing Face",
    "🥵 Hot Face",
    "🥶 Cold Face",
    "🥴 Woozy Face",
    "😵 Dizzy Face",
    "🤯 Exploding Head",
    "🤠 Cowboy Hat Face",
    "🥳 Partying Face",
    "😎 Smiling Face with Sunglasses",
    "🤓 Nerd Face",
    "🧐 Face with Monocle",
    "😕 Confused Face",
    "😟 Worried Face",
    "🙁 Slightly Frowning Face",
    "☹️ Frowning Face",
    "😮 Face with Open Mouth",
    "😯 Hushed Face",
    "😲 Astonished Face",
    "😳 Flushed Face",
    "🥺 Pleading Face",
    "😦 Frowning Face with Open Mouth",
    "😧 Anguished Face",
  ];
  
  for (let i = 0; i < emoji.length; i++) {
    const grid = document.getElementById("grid");
  
    let icon = document.createElement("div");
    let cell = document.createElement("div");
    let title = document.createElement("h4");
    cell.classList.add("contain");
    icon.classList.add("icon");
    title.classList.add("text");
    title.innerText = emoji[i].slice(3, emoji[i].length);
  
    icon.innerHTML = emoji[i].slice(0, 2);
    cell.appendChild(icon);
    cell.appendChild(title);
  
    grid.appendChild(cell);
  }
  
  function getemo() {
    const box = document.getElementById("box");
    var number = Math.floor(Math.random() * 72);
    let fact = emoji[number];
    box.innerHTML = ` <h2>${fact}</h2><br>
  `;
  }
  
  