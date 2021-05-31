const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// focus by default
textarea.focus();

textarea.addEventListener('keyup', (e) => {
	// create a tag for all the inputs separated by a comma
	createTags(e.target.value);
	
	// check if the enter key is pressed
	if(e.key === 'Enter') {
		// empty textarea
		// used setTimeout to add a little delay in order to clean the input
		setTimeout(() => {
			e.target.value = '';
		}, 10)
		
		// start randomizer
		randomSelect();
	}
});

function createTags(input) {
	const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
	
	// clean up the tags first
	tagsEl.innerHTML = '';
	
	// map over the tags and add them to the tagsEl container
	tags.forEach(tag => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	})
}

function randomSelect() {
	const times = 30;
	
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		
		highlightTag(randomTag);
		
		// remove the highlight after a while
		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);
	
	// allow times * 100 ms for the tags to randomly "highlight" themselves
	// then pick another tag
	setTimeout(() => {
		clearInterval(interval);
		
		setTimeout(() => {
			const randomTag = pickRandomTag();
			
			highlightTag(randomTag)
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
