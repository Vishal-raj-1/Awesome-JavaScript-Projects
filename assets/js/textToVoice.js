const message = new SpeechSynthesisUtterance();

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
message.text = document.querySelector('[name="text"]').value;

function collectVoices() {
	voices = this.getVoices();
	voicesDropdown.innerHTML = voices
		.map(
			(voice) =>
				`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
		)
		.join("");
}

function setVoice() {
	message.voice = voices.find((voice) => voice.name === this.value);
	toggle();
}

function toggle(startOver = true) {
	speechSynthesis.cancel();
	if (startOver) {
		speechSynthesis.speak(message);
	}
}

function setOption() {
	message[this.name] = this.value;
	toggle();
}

speechSynthesis.addEventListener("voiceschanged", collectVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));