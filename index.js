const roles = [
  "Software Developer",
  "Network Engineer",
  "Start-up ISP",
  "TVET Trainer",
];

const roleHolder = document.querySelector(".roles");

const typingSpeed = 125; //
const erasingSpeed = 60; // Speed in milliseconds
const delayBetweenRoles = 2000;
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleHolder.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleHolder.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});
