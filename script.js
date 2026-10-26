// Scroll-fade animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Back to top
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav link
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav ul a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});


/* PROJECT DETAILS MODAL */
const projectModal =
  document.getElementById("projectModal");

const openProjectBtn =
  document.getElementById("viewProjectDetails");

const closeProjectBtn =
  document.getElementById("closeProjectModal");

let previousFocus = null;

function openProjectModal() {
  previousFocus = document.activeElement;
  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  closeProjectBtn.focus();
}

function closeProjectModal() {
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  previousFocus?.focus();
}

openProjectBtn.addEventListener(
  "click",
  openProjectModal
);

closeProjectBtn.addEventListener(
  "click",
  closeProjectModal
);

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (projectModal.hidden) return;

  if (event.key === "Escape") {
    closeProjectModal();
  }

  if (event.key === "Tab") {
    const focusable = Array.from(
      projectModal.querySelectorAll(
        'a[href], button:not([disabled])'
      )
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey &&
        document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey &&
               document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
