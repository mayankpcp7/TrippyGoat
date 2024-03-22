
// -------------------------------Navbar----------------------------------------------------

function shownav() {
  document.getElementById("mobilenav").classList.add("start_0");
}
function hidenav() {
  document.getElementById("mobilenav").classList.remove("start_0");
}

// -----------------------------------Mint Nft------------------------------------------------
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




//--------------------------- accordion --------------------------------//
// JavaScript to toggle accordion content
function toggleAccordion(index) {
    const content = document.getElementById(`accordionContent${index}`);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('show');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('show');
    }
}
