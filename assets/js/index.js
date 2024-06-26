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

  // Accordion Functionality
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () { });
  }
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

//------------------------------------- back to top ---------------------------/
const topbtn = document.getElementById('topbtn');
window.onscroll = function () { topscroll() };

function topscroll() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbtn.style.display = "block";
  }
  else {
    topbtn.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//-------------------------------------------- year function ----------------------------------------//
document.getElementById("currentYear").innerText =
  new Date().getFullYear();

 //----------------------------------------------- onscroll_timeline -------------------------------/ /
    $(document).ready(function () {
      var items = $(".timeline2 li"),
        lineToDraw = $(".draw-line");
      // Update line height on window scroll
      $(window).on("scroll", function () {
        var windowDistance = $(window).scrollTop(),
          windowHeight = $(window).height() / 2,
          timelineDistance = $(".timeline2").offset().top;

        if (windowDistance >= timelineDistance - windowHeight) {
          var line = windowDistance - timelineDistance + windowHeight;
          lineToDraw.css("height", line + 20 + "px");
        }
        // Add or remove 'in-view' class based on visibility
        var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
        items.each(function (index) {
          var circlePosition = $(this).offset();
          if (bottom > circlePosition.top) {
            $(this).addClass("in-view");
          } else {
            $(this).removeClass("in-view");
          }
        });
      });
    });
