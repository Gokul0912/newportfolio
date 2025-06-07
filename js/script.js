const typed = new Typed(".typewrite", {
  strings: [
    "AR/VR Developer",
    "Game Designer",
    "SAP Innovator",
    "Generative AI Explorer",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! I’ll get back to you soon.");
  this.reset();
});
// Project Video Popup Logic
const cards = document.querySelectorAll('.project-card');
const popup = document.getElementById('videoPopup');
const video = document.getElementById('popupVideo');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const file = card.getAttribute('data-video');
    video.src = `assets/videos/${file}`;
    popup.classList.remove('hidden');
    video.play();
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  video.pause();
  video.currentTime = 0;
});
const roleText = document.querySelector('.typed-role');
const roles = [
  "AR/VR Developer",
  "AI Enthusiast",
  "SAP Innovator",
  "Game Designer",
  "Creative Technologist"
];
let index = 0;
let char = 0;
let typingSpeed = 100;

function typeRole() {
  if (char < roles[index].length) {
    roleText.textContent = roles[index].substring(0, char + 1);
    char++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (char > 0) {
    roleText.textContent = roles[index].substring(0, char - 1);
    char--;
    setTimeout(eraseRole, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

typeRole();
// Sticky Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
function toggleCard(id) {
  const cards = document.querySelectorAll(".experience-card");
  cards.forEach(card => {
    const back = card.querySelector(".card-back");
    if (back.id === id) {
      card.classList.toggle("active");
    } else {
      card.classList.remove("active");
    }
  });
}
function toggleCard(card) {
  card.classList.toggle("active");
}
