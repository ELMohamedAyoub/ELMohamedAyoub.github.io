// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth cursor movement
  const distX = mouseX - cursorX;
  const distY = mouseY - cursorY;
  
  cursorX += distX * 0.3;
  cursorY += distY * 0.3;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  
  // Follower with delay
  const followerDistX = mouseX - followerX;
  const followerDistY = mouseY - followerY;
  
  followerX += followerDistX * 0.1;
  followerY += followerDistY * 0.1;
  
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    cursorFollower.style.transform = 'scale(1.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
  });
});

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Animate hamburger
  const spans = hamburger.querySelectorAll('span');
  if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// TYPING ANIMATION
// ==========================================
const typingText = document.querySelector('.typing-text');
const titles = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'Data Scientist',
  'Python Expert',
  'TypeScript Developer',
  'Problem Solver'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    typingText.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typingText.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }
  
  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    typingDelay = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typingDelay = 500; // Pause before typing next
  }
  
  setTimeout(typeEffect, typingDelay);
}

// Start typing animation
typeEffect();

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// ==========================================
// COUNTER ANIMATION
// ==========================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target;
          }
        };
        
        updateCounter();
      });
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// PROJECT CARDS ANIMATION
// ==========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.addEventListener('mouseenter', () => {
    projectCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.style.opacity = '0.5';
        otherCard.style.filter = 'blur(2px)';
      }
    });
  });
  
  card.addEventListener('mouseleave', () => {
    projectCards.forEach(otherCard => {
      otherCard.style.opacity = '1';
      otherCard.style.filter = 'blur(0)';
    });
  });
});

// ==========================================
// SKILL TAGS INTERACTION
// ==========================================
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.style.animation = 'none';
    setTimeout(() => {
      tag.style.animation = 'pulse 0.5s ease';
    }, 10);
  });
});

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate hero elements on load
  const heroElements = document.querySelectorAll('.hero .reveal');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('active');
    }, index * 100);
  });
});

// ==========================================
// PARALLAX EFFECT ON SCROLL
// ==========================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
  }
});

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-content p');
if (footerYear) {
  footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ==========================================
// CONSOLE EASTER EGG
// ==========================================
console.log(
  '%c👋 Hello there!',
  'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
  '%cLike what you see? Let\'s connect!',
  'font-size: 14px; color: #38bdf8;'
);
console.log(
  '%cGitHub: https://github.com/ELMohamedAyoub',
  'font-size: 12px; color: #94a3b8;'
);
console.log(
  '%cLinkedIn: https://linkedin.com/in/elmohamedayoub',
  'font-size: 12px; color: #94a3b8;'
);

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================
// Keyboard navigation for project cards
projectCards.forEach(card => {
  card.setAttribute('tabindex', '0');
  
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const link = card.querySelector('.project-link');
      if (link) {
        link.click();
      }
    }
  });
});

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 10000;
`;
skipLink.addEventListener('focus', () => {
  skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
  skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ==========================================
// THEME DETECTION (Respect user preferences)
// ==========================================
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition-base', '0s');
  document.documentElement.style.setProperty('--transition-slow', '0s');
}
