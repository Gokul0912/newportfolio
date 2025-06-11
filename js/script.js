document.addEventListener('DOMContentLoaded', () => {
  // Typed.js initialization
  const typed = new Typed(".typed-role", {
    strings: [
      "AR/VR Developer",
      "Game Designer",
      "SAP Innovator",
      "Generative AI Explorer",
      "Creative Technologist"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });

  // Enquiry form handler
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! I’ll get back to you soon.");
      this.reset();
    });
  }

  // Video popup logic (only for AR/VR cards)
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('popupVideo');
  const closeBtn = popup.querySelector('.close-btn');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Always flip the card
      card.classList.toggle('flipped');

      const isInNoVideoSection = card.closest('[data-novideo]');
      const file = card.getAttribute('data-video');

      if (isInNoVideoSection || !file) return;

      video.src = `assets/videos/${file}`;
      video.load();

      video.onloadedmetadata = () => {
        const isPortrait = video.videoHeight > video.videoWidth;
        video.classList.toggle("portrait-video", isPortrait);
        popup.classList.remove('hidden');
        video.play().catch(err => console.log('Video play error:', err));
      };
    });
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    video.src = "";
    popup.classList.add('hidden');
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
      video.pause();
      video.currentTime = 0;
      video.src = "";
    }
  });

  // Sticky navbar
  const header = document.querySelector('#header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Highlight nav on scroll
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
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

  // Scroll to top
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

  // Custom cursor
  const cursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.addEventListener('click', () => {
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 150);
  });

  // tsparticles background
  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: { value: "#0c0c0c" } },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#00fff7" },
      links: {
        enable: true,
        color: "#00fff7",
        distance: 150,
        opacity: 0.5,
        width: 1
      },
      move: { enable: true, speed: 1 },
      size: { value: 2 },
      opacity: { value: 0.5 }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }
      }
    }
  });

  // Neon color animation
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

  function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  }

  updateNeonColors();

  // Neural canvas animation
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
    points.length = 0;
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

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);
    updatePoints();
    drawLines();
    requestAnimationFrame(animateCanvas);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    createPoints();
  });

  resizeCanvas();
  createPoints();
  animateCanvas();
});

// Toggle between AR/VR and AI/ML sections
function toggleProjectSection(section) {
  const arvr = document.getElementById("arvr-projects");
  const aiml = document.getElementById("aiml-projects");

  if (section === "arvr") {
    arvr.classList.remove("hidden");
    aiml.classList.add("hidden");
  } else {
    aiml.classList.remove("hidden");
    arvr.classList.add("hidden");
  }
}
document.querySelectorAll('.project-card, .experience-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Flip the card on click
    card.classList.toggle('flipped');

    // Video logic only applies to project cards with data-video and not in data-novideo section
    if (!card.classList.contains('project-card')) return;

    const isInNoVideoSection = card.closest('[data-novideo]');
    const file = card.getAttribute('data-video');

    if (isInNoVideoSection || !file) return;

    video.src = `assets/videos/${file}`;
    video.load();

    video.onloadedmetadata = () => {
      const isPortrait = video.videoHeight > video.videoWidth;
      video.classList.toggle("portrait-video", isPortrait);
      popup.classList.remove('hidden');
      video.play().catch(err => console.log('Video play error:', err));
    };
  });
});
