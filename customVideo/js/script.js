// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progressbar = player.querySelector('progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build our functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
    
}

// hook up event listeners
video.addEventListener('click',togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
