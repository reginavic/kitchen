const buttonStart = document.querySelector('#startButton');
const buttonPause = document.querySelector('#pauseButton');
const countDown = document.querySelector("#countdown");
const inputMin = document.querySelector("#minut");
const inputSec = document.querySelector("#sec");

let timerId;
let pause = false;
let amountTime = 0;

timer();

function timer() {
	buttonStart.addEventListener("click", () => {
		const timerMin = Number(inputMin.value);
		const timerSec = Number(inputSec.value);

		amountTime = timerMin * 60 + timerSec;

    startTimer()
	})
}
buttonPause.addEventListener("click", () => {
    pause = !pause;
})

function startTimer() {
	timerId = setInterval(() => {
		if (pause) return;
		amountTime--;
		time();
	}, 1000)
}

function time() {
	let minutes = Math.floor(amountTime / 60);
	let seconds = amountTime % 60;

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	countDown.textContent = `${minutes}:${seconds}`;

	if (amountTime <= 0) {
		stopTimer();
		amountTime = 0;
		document.querySelector('#pauseButton');
	}

	function stopTimer() {
		timerId = clearInterval(timerId);
		document.querySelector("#player").play();
	}
}

document.querySelector("#refreshButton").addEventListener("click", () => {
	window.location.reload();
	document.querySelector("#player").pause();
})


