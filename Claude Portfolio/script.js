/* ─────────────────────────────────────────
   script.js — Jose Amala Kishor A Portfolio
───────────────────────────────────────── */

// ─── MOBILE HAMBURGER MENU ───
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ─── CURSOR GLOW ───
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Stagger child cards
      const children = entry.target.querySelectorAll(
        '.about-card, .skill-group, .tl-card, .project-card, .contact-item'
      );
      children.forEach((child, idx) => {
        child.style.transitionDelay = (idx * 0.1) + 's';
      });

      setTimeout(() => entry.target.classList.add('visible'), 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el) => observer.observe(el));

// ─── TYPING ANIMATION (Hero Role) ───
const roleEl = document.querySelector('.hero-role');
const roles = [
  'Frontend Developer',
  'Full Stack Developer',
  'React Enthusiast',
  'UI/UX Builder',
];

let roleIndex    = 0;
let charIndex    = 0;
let isDeleting   = false;

function typeWriter() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    roleEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    roleEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex  = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 60 : 90);
}

setTimeout(typeWriter, 1200);

// ─── CONTACT FORM ───
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');

  btn.textContent       = '✓ Message Sent!';
  btn.style.background  = 'linear-gradient(135deg, #10b981, #06b6d4)';
  btn.style.boxShadow   = '0 4px 20px rgba(16,185,129,0.4)';

  setTimeout(() => {
    btn.textContent      = 'Send Message →';
    btn.style.background = '';
    btn.style.boxShadow  = '';
    e.target.reset();
  }, 3000);
}

// ─── NAV ACTIVE HIGHLIGHT ON SCROLL ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color =
      link.getAttribute('href') === '#' + current ? '#c4b5fd' : '';
  });
});