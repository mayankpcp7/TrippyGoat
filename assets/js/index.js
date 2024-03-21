const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;
const maxValue = 5656;

function updateCounter() {
    countElement.textContent = `${count} / ${maxValue}`;
}

function incrementCounter() {
    if (count < maxValue) {
        count++;
        updateCounter();
    }
}

function decrementCounter() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

updateCounter(); // Initialize the counter text content
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
