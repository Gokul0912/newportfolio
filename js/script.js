document.addEventListener('DOMContentLoaded', () => {
  // Typed.js initialization (if you are using Typed library)
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

  // Enquiry form submission handler
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! I’ll get back to you soon.");
      this.reset();
    });
  }

  // Project Video Popup Logic
  const cards = document.querySelectorAll('.project-card');
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('popupVideo');
  const closeBtn = popup.querySelector('.close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const file = card.getAttribute('data-video');
      video.src = `assets/videos/${file}`;
      video.load();
      popup.classList.remove('hidden');
      video.play().catch(err => {
        console.log('Video play error:', err);
      });
    });
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    video.src = "";
    popup.classList.add('hidden');
  });

  // Typed Role Animation without library
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
  const typingSpeed = 100;

  function typeRole() {
    if (!roleText) return;
    if (char < roles[index].length) {
      roleText.textContent = roles[index].substring(0, char + 1);
      char++;
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(eraseRole, 2000);
    }
  }

  function eraseRole() {
    if (!roleText) return;
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
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Active Link Highlighting on Scroll
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

  // Smooth scroll for anchor links (optional, if not handled elsewhere)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Experience Card Toggle
  function toggleCardById(id) {
    const cards = document.querySelectorAll(".experience-card");
    cards.forEach(card => {
      const back = card.querySelector(".card-back");
      if (back && back.id === id) {
        card.classList.toggle("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  function toggleCard(card) {
    card.classList.toggle("active");
  }

  // Expose toggleCardById globally if needed (e.g. from inline HTML onclick)
  window.toggleCardById = toggleCardById;
  window.toggleCard = toggleCard;

  // Flip Card helper (if used)
  window.flipCard = function(cardElement) {
    cardElement.classList.toggle("flipped");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("popupVideo");
  const closeBtn = popup.querySelector(".close-btn");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const file = card.getAttribute("data-video");
      const path = `assets/videos/${file}`;
      console.log("Opening video:", path);
      
      video.src = path;
      video.muted = true;
      video.load();
      popup.classList.remove("hidden");
      
      video.play()
        .then(() => console.log("Video playing"))
        .catch(err => console.error("Video play error:", err));
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    video.pause();
    video.currentTime = 0;
    video.src = "";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
      video.pause();
      video.currentTime = 0;
      video.src = "";
    }
  });
});
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: {
    color: {
      value: "#0c0c0c"
    }
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#00fff7"
    },
    links: {
      enable: true,
      color: "#00fff7",
      distance: 150,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    },
    size: {
      value: 2
    },
    opacity: {
      value: 0.5
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});
// Scroll reveal animation for sections
const revealElements = document.querySelectorAll('.section-title, .experience-card, .project-card, .freelance-card');

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, {
  threshold: 0.1
});

revealElements.forEach(el => {
  el.classList.add('reveal'); // Add initial hidden state class
  observer.observe(el);
});
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('click', () => {
  cursor.classList.add('clicked');
  setTimeout(() => cursor.classList.remove('clicked'), 150);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  let hue = 180;

  function updateNeonColors() {
    hue = (hue + 1) % 360;

    const primaryHue = hue;
    const secondaryHue = (hue + 180) % 360;

    const primaryColor = `hsl(${primaryHue}, 100%, 60%)`;
    const secondaryColor = `hsl(${secondaryHue}, 100%, 70%)`;

    const glowPrimary = `rgba(${hslToRgb(primaryHue, 100, 60).join(',')}, 0.7)`;
    const glowSecondary = `rgba(${hslToRgb(secondaryHue, 100, 70).join(',')}, 0.7)`;

    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--glow-color-primary', glowPrimary);
    document.documentElement.style.setProperty('--glow-color-secondary', glowSecondary);

    requestAnimationFrame(updateNeonColors);
  }

  // Convert HSL to RGB (0-255 array)
  function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  }

  updateNeonColors();
});
const canvas = document.getElementById('neuralBackground');
const ctx = canvas.getContext('2d');
let width, height;
const points = [];
const POINTS_COUNT = 60;
const MAX_DIST = 150;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function createPoints() {
  for (let i = 0; i < POINTS_COUNT; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    });
  }
}

function updatePoints() {
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
}

function drawLines() {
  for (let i = 0; i < POINTS_COUNT; i++) {
    for (let j = i + 1; j < POINTS_COUNT; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / MAX_DIST})`;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  updatePoints();
  drawLines();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
createPoints();
animate();
