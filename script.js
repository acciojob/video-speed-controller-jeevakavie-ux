const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorA11(".player__slider");
const skipButtons = player.querySelectorA11("[data-skip]");


function toggleplay() {
	if (video.paused) {
		video.play();
    } else {
		video.pause();
	}
}

function updateButton() {
	toggle.textContent = video.paused ? "►" : "❚ ❚";  
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleprogress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener("click", toggleplay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", toggleplay);

video.addEventListener("timeupdate", handleRangeUpdate)

sliders.forEach(slider =>
	slider.addEventListener("input", handleRangeUpdate)
);

skipButtons.forEach(button =>
	button.addEventListener("click", skip)
);	

progress.addEventListener("click", scrub);


