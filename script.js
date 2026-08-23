// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('in-view'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

// ===== Hero terminal typing effect =====
const terminalBody = document.getElementById('terminalBody');

const terminalLines = [
  { type: 'prompt', text: '$ whoami' },
  { type: 'out', text: 'naveed — senior software engineer, backend & full-stack' },
  { type: 'prompt', text: '$ uptime' },
  { type: 'out', text: '5+ years in production systems' },
  { type: 'prompt', text: '$ status --current' },
  { type: 'out', text: 'leading a team of 5 @ TheStaffer.com' },
  { type: 'prompt', text: '$ stack --primary' },
  { type: 'out', text: 'Laravel · Python · MySQL · Redis · Kafka' },
];

function typeTerminal() {
  if (!terminalBody) return;

  if (prefersReducedMotion) {
    terminalBody.innerHTML = terminalLines
      .map(l => `<div class="${l.type === 'prompt' ? 'line-prompt' : 'line-out'}">${l.text}</div>`)
      .join('');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  function typeChar() {
    if (lineIndex >= terminalLines.length) {
      terminalBody.appendChild(cursor);
      return;
    }

    const line = terminalLines[lineIndex];
    let currentLineEl = terminalBody.querySelector(`[data-line="${lineIndex}"]`);
    if (!currentLineEl) {
      currentLineEl = document.createElement('div');
      currentLineEl.dataset.line = lineIndex;
      currentLineEl.className = line.type === 'prompt' ? 'line-prompt' : 'line-out';
      terminalBody.appendChild(currentLineEl);
    }

    if (charIndex <= line.text.length) {
      currentLineEl.textContent = line.text.slice(0, charIndex);
      charIndex++;
      setTimeout(typeChar, line.type === 'prompt' ? 32 : 14);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeChar, line.type === 'prompt' ? 120 : 260);
    }
  }

  typeChar();
}

// Kick off typing once hero is in view (or immediately, it's above the fold)
typeTerminal();
