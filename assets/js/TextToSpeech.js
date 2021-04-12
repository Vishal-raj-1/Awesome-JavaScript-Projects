// Init SpeechSynth API
const synth = window.speechSynthesis;
// DOM Elements
const textForm = document.querySelector('anim');
const textInput = document.getElementById('text');
const voiceSelect = document.getElementById('voices');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const afterEffect = document.querySelector('#text-box');
const main = document.querySelector('main');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const readBtn = document.getElementById('read');
const data = [{
    image: '../assets/Images/TextToSpeech/hungry.jpeg',
    text: "I'm Hungry"
  },
  {
    image: '../assets/Images/TextToSpeech/thirsty.jpeg',
    text: "I'm Thirsty"
  },
  {
    image: '../assets/Images/TextToSpeech/tired.jpeg',
    text: "I'm Tired"
  },
  {
    image: '../assets/Images/TextToSpeech/surprised.jpeg',
    text: "I'm Surprised"
  },
  {
    image: '../assets/Images/TextToSpeech/happy.jpeg',
    text: "I'm Happy"
  },
  {
    image: '../assets/Images/TextToSpeech/angry.jpeg',
    text: "I'm Angry"
  },
  {
    image: '../assets/Images/TextToSpeech/sad.jpeg',
    text: "I'm Sad"
  },
  {
    image: '../assets/Images/TextToSpeech/sacred.jpeg',
    text: "I'm Scared"
  },
  {
    image: '../assets/Images/TextToSpeech/outside.jpeg',
    text: 'I Want To Go Outside'
  },
  {
    image: '../assets/Images/TextToSpeech/home.jpeg',
    text: 'I Want To Go Home'
  },
  {
    image: '../assets/Images/TextToSpeech/college.jpeg',
    text: 'I Want To Go To College'
  },
  {
    image: '../assets/Images/TextToSpeech/library.jpeg',
    text: 'I Want To Go To Library'
  }
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const {
    image,
    text
  } = item;

  box.classList.add('box');

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Toggle text box
toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);







// Init voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement('option');
    // Fill option with voice and language
    option.textContent = voice.name + '(' + voice.lang + ')';

    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};

//line 117 ,118 cause duplication of voice
getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    // Add background animation
    afterEffect.style.background = '#141414 url(../assets/Images/TextToSpeech/wave.gif)';
    afterEffect.style.backgroundRepeat = 'repeat-x';
    afterEffect.style.backgroundSize = '100% 100%';

    // Get speak text
    const speakTextt = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakTextt.onend = e => {
      console.log('Done speaking...');
      afterEffect.style.background = '#333';
    };

    // Speak error
    speakTextt.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakTextt.voice = voice;
      }
    });

    // Set pitch and rate
    speakTextt.rate = rate.value;
    speakTextt.pitch = pitch.value;
    // Speak
    synth.speak(speakTextt);
  }
};

// EVENT LISTENERS
readBtn.addEventListener('click', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});
// Rate value change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener('change', e => speak());