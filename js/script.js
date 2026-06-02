// ===========================
// Typing Effect for Hero Section
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;

    const fullText = 'Почистване, смяна на термопаста, upgrade и инсталация — бързо и с гаранция в София';
    let index = 0;

    function typeText() {
        if (index <= fullText.length) {
            typedTextElement.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeText, 45);
        }
    }

    typeText();
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================
// Smooth Scrolling for in-page anchors
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const floatingCta = document.getElementById('floating-cta');
const backToTopBtn = document.getElementById('back-to-top');

function onScroll() {
    const y = window.scrollY;

    if (navbar) navbar.classList.toggle('scrolled', y > 50);
    if (floatingCta) floatingCta.classList.toggle('visible', y > 600);
    if (backToTopBtn) backToTopBtn.classList.toggle('visible', y > 600);

    updateActiveLink();
}

// ===========================
// Performance: throttle scroll with rAF
// ===========================
let ticking = false;
window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            onScroll();
            ticking = false;
        });
        ticking = true;
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===========================
// ===========================

// ===========================
// Scroll Reveal Animations
// ===========================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
                entry.target.classList.add('in');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
} else {
    revealEls.forEach(el => el.classList.add('in'));
}

// ===========================
// Console Message
// ===========================
console.log('%cFixHub Sofia', 'color: #2f6b4f; font-size: 22px; font-weight: bold;');
console.log('%cРемонт на компютри и лаптопи в София', 'color: #44504b; font-size: 13px;');
