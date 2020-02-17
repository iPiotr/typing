window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

let currentLevel = levels.easy;

let time = currentLevel + 1;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const autoFocus = document.querySelector('#word-input').autofocus;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'runaway',
    'joke',
    'developer',
    'voice',
    'hero',
    'javascript',
    'revolver',
    'echo',
    'siblings',
    'mission',
    'pressure',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'fed',
    'divide',
    'whatever',
    'television',
    'east',
    'dark',
    'unit',
    'applied',
    'milk',
    "next",
    "short",
    "nice",
    "bottle",
    "full",
    "soda",
    "vast",
    "glue",
    "close",
    "hurry",
    "robin",
    "trace",
    "rock",
    "absent",
    "cover",
    "note",
    "burst",
    "relax",
    "group",
    "sad",
    "rob",
    "yell",
    "pop",
    "mix",
    "fix",
    "hot",
    "pin",
    "hill",
    "wiry",
    "dirt",
];

function init() {
    seconds.innerHTML = currentLevel;
    seconds.classList.add('good');
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct !';
        message.classList.add('good');
        message.classList.remove('bad');
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over !';
        message.classList.remove('good');
        message.classList.add('bad');
        score = 0;
    }

    if (score === 0) {
        currentLevel = levels.easy;
    }
    else if (score === 10) {
        currentLevel = levels.medium;
    }
    else if (score === 20) {
        currentLevel = levels.hard;
    }
}