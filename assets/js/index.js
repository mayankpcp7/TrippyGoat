// -------------------------------Navbar----------------------------------------------------

function shownav() {
  document.getElementById("mobilenav").classList.add("start_0");
  document.body.style.overflow = "hidden";
}
function hidenav() {
  document.getElementById("mobilenav").classList.remove("start_0");
  document.body.style.overflow = "unset";
}

//--------------------------- counter box --------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  // Counter Box Functionality
  const countElement = document.getElementById("count");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
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
  incrementBtn.addEventListener("click", incrementCounter);
  decrementBtn.addEventListener("click", decrementCounter);

  // Accordion Functionality
  var acc = document.getElementsByClassName("accordion");
  var i;

<<<<<<< HEAD
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Accordion logic here
    });
  }
=======
    // Accordion Functionality
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
        });
    }
>>>>>>> e64020715ad1e443e557026e18e7d0198daa399c
});

//--------------------------- accordion js--------------------------------//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");

    // Close active accordion if clicked again
    if (isActive) {
      this.classList.remove("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = null;
    } else {
      // Close all other active accordions
      var activeAccordions = document.querySelectorAll(".accordion.active");
      activeAccordions.forEach(function (acc) {
        acc.classList.remove("active");
        var panel = acc.nextElementSibling;
        panel.style.maxHeight = null;
      });

      // Open the clicked accordion
      this.classList.add("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
