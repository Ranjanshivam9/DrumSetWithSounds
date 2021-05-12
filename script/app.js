function rollBtnClick () {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	//  image 1 src
	var img1src = './images/dice' + randomNumber1 + '.png';
	document.getElementById('img1').setAttribute('src', img1src);

	// image 2 src
	var img2src = './images/dice' + randomNumber2 + '.png';
	document.getElementById('img2').setAttribute('src', img2src);

	// changing text with number
	if (randomNumber1 > randomNumber2) {
		document.getElementById('lets-play').innerHTML = 'PLayer 1 Wins!!';
	}
	else if (randomNumber1 < randomNumber2) {
		document.getElementById('lets-play').innerHTML = 'PLayer 2 Wins!!';
	}
	else {
		document.getElementById('lets-play').innerHTML = 'Draw !!';
	}
}

//  for refreshing upon click
function refreshPage () {
	window.location.reload();
}
//
//
//
// ////// FOR DRUM APP!!!!!!!
//
//
//for getting ths list of button with class drum

var drum_list = document.querySelectorAll('.drum').length;

// adding an event lisenter (click) to every button in that nodelist
var button = '';
var pressed = null;

for (i = 0; i < drum_list; i++) {
	var drum = document.querySelectorAll('.drum')[i];
	drum.addEventListener('click', function () {
		var button = this.className;
		click(button, pressed);
		animation(button);
	});
}

document.addEventListener('keydown', function (event) {
	var pressed = event.key;
	click(button, pressed);
	animationOfKeypress(pressed);
});

// function to determine which button class was  Pressed
// and to play the sound upon click
function click (button, pressed) {
	// switch statement to ture(new thing learned) to check if str includes
	// drum1 / 2 / 3 / 4 / 5 / 6 class it wont work with normal switch (key)

	switch (true) {
		case button.includes('drum1') || pressed === 'a' || pressed === 'A':
			var drum1Audio = new Audio('./sounds/tom-1.mp3');
			drum1Audio.play();

			break;

		case button.includes('drum2') || pressed === 's' || pressed === 'S':
			var drum2Audio = new Audio('./sounds/tom-2.mp3');
			drum2Audio.play();
			break;

		case button.includes('drum3') || pressed === 'd' || pressed === 'D':
			var drum3Audio = new Audio('./sounds/tom-3.mp3');
			drum3Audio.play();
			break;

		case button.includes('drum4') || pressed === 'j' || pressed === 'J':
			var drum4Audio = new Audio('./sounds/crash.mp3');
			drum4Audio.play();
			break;

		case button.includes('drum5') || pressed === 'k' || pressed === 'K':
			var drum5Audio = new Audio('./sounds/kick.wav');
			drum5Audio.play();
			break;

		case button.includes('drum6') || pressed === 'l' || pressed === 'L':
			var drum6Audio = new Audio('./sounds/snare.mp3');
			drum6Audio.play();
			break;

		default:
			console.log('something wrong');
			break;
	}
}

// THATS HOW    CALLBACK    FUNCTION IS WORKING IN ABOVE METHOD
// IN ABOVE EVENT LISTENER Xd

function anotherEventListener (typeOfEvent, callback) {
	var eventThatHappened = {
		eventType: 'hello',
		key: 'g#',
		toWhom: 'me'
	};

	var eventThatNeverHappened = {
		eventType: 'nohello',
		key: 'd#',
		toWhom: 'you'
	};

	if (eventThatHappened.eventType === typeOfEvent) {
		callback(eventThatHappened);
	}
	if (eventThatNeverHappened.eventType === typeOfEvent) {
		callback(eventThatNeverHappened);
	}
}

function animation (key) {
	var splitKey = key.split(' ');
	classOfButton = splitKey[0];
	var activeButton = document.querySelector('.' + classOfButton);

	activeButton.classList.add('pressed');
	setTimeout(function () {
		activeButton.classList.remove('pressed');
	}, 100);
}

function animationOfKeypress (event) {
	console.log(event);
	if (event === 'a' || event === 'A') {
		var active = document.querySelector('.drum1');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
	else if (event === 's') {
		var active = document.querySelector('.drum2');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
	else if (event === 'd') {
		var active = document.querySelector('.drum3');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
	else if (event === 'j') {
		var active = document.querySelector('.drum4');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
	else if (event === 'k') {
		var active = document.querySelector('.drum5');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
	else if (event === 'l') {
		var active = document.querySelector('.drum6');
		active.classList.add('pressed');
		setTimeout(function () {
			active.classList.remove('pressed');
		}, 100);
	}
}
