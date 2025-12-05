// ========== SET CURRENT YEAR IN FOOTER ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========== OBSERVER: REVEAL PROJECTS ON SCROLL ==========
const fadeElements = document.querySelectorAll(".fade-in");

const observerOptions = {
  threshold: 0.2, // when 20% of element is visible
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Special: trigger gesture drone animation when that project appears
      if (entry.target.id === "project-gesture-drone") {
        startDroneAnimation();
      }
    }
  });
}, observerOptions);

fadeElements.forEach((el) => fadeObserver.observe(el));

// ========== DRONE ANIMATION CONTROL ==========
function startDroneAnimation() {
  const drone = document.querySelector(".drone");
  if (!drone) return;

  // Classes enable flying path + spinning props
  drone.classList.add("drone-fly", "drone-active");
}

/*
  NOTES:
  - All project visuals have their own CSS animations, which loop (recurrence).
  - By default, visual animations are paused using:
        .project-visual * { animation-play-state: paused; }
    and resume once the project card gets the .visible class.
  - For the gesture drone, the IntersectionObserver also starts a dedicated
    droneFly + spin sequence via startDroneAnimation().
*/
