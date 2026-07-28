// script.js

/* -------- Floating particles -------- */
const particleLayer = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 8 + 4;
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (Math.random() * 15 + 15) + 's';
  p.style.animationDelay = -(Math.random() * 20) + 's';
  p.style.opacity = Math.random() * 0.6 + 0.3;
  particleLayer.appendChild(p);
}

/* -------- Floating hearts -------- */
const heartLayer = document.getElementById('hearts');
const heartChars = ['♡', '❤', '♥'];
for (let i = 0; i < 14; i++) {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = (Math.random() * 14 + 12) + 'px';
  h.style.animationDuration = (Math.random() * 18 + 14) + 's';
  h.style.animationDelay = -(Math.random() * 25) + 's';
  h.style.opacity = Math.random() * 0.5 + 0.3;
  heartLayer.appendChild(h);
}

/* -------- Twinkling sparkles -------- */
const sparkleLayer = document.getElementById('sparkles');
for (let i = 0; i < 40; i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.animationDuration = (Math.random() * 3 + 2) + 's';
  s.style.animationDelay = -(Math.random() * 4) + 's';
  const scale = Math.random() * 0.8 + 0.4;
  s.style.transform = `scale(${scale})`;
  sparkleLayer.appendChild(s);
}

/* -------- Reveal on scroll -------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 120);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

/* -------- Subtle parallax on decorations -------- */
const decos = document.querySelectorAll('.deco');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  decos.forEach((d, i) => {
    const depth = (i % 3 + 1) * 0.4;
    d.style.translate = `${x * depth}px ${y * depth}px`;
  });
});