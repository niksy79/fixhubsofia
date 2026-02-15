// ===========================
// Typing Effect for Hero Section
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const fullText = 'От компютри до умни устройства - всичко на едно място в София';
    let index = 0;

    function typeText() {
        if (index <= fullText.length) {
            typedTextElement.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;

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

window.addEventListener('scroll', updateActiveLink);

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Floating CTA Button Show/Hide
// ===========================
const floatingCta = document.getElementById('floating-cta');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        floatingCta.classList.add('visible');
    } else {
        floatingCta.classList.remove('visible');
    }
});

// ===========================
// Contact Form Handling (Placeholder)
// ===========================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Placeholder alert - ще заменим с реална функционалност
        alert('Формата все още не е свързана с email сървис. Ще интегрираме Formspree или EmailJS.');

        // За бъдеща интеграция с Formspree/EmailJS:
        /*
        const formData = new FormData(this);

        fetch('YOUR_FORMSPREE_ENDPOINT', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Съобщението е изпратено успешно!');
            contactForm.reset();
        })
        .catch(error => {
            alert('Грешка при изпращане. Моля опитайте отново.');
        });
        */
    });
}

// ===========================
// Intersection Observer for Animations (Optional)
// ===========================
// Добавяме fade-in анимации при скрол до секции
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаваме service cards, blog cards и gallery items
document.querySelectorAll('.service-card, .blog-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Gallery Image Modal (Future Enhancement)
// ===========================
// Когато имаш реални снимки, можеш да добавиш lightbox функционалност
/*
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Отваряне на modal с увеличена снимка
        // Може да използваш библиотека като SimpleLightbox или custom modal
    });
});
*/

// ===========================
// Scroll to Top Function
// ===========================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Можеш да добавиш бутон "нагоре" ако искаш
// Добави в HTML: <button id="scroll-top" onclick="scrollToTop()">↑</button>

// ===========================
// Performance: Debounce Scroll Events
// ===========================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Използваме debounce за scroll event-ите
window.addEventListener('scroll', debounce(updateActiveLink));

// ===========================
// Console Message
// ===========================
console.log('%c🔧 FixHub Sofia', 'color: #06b6d4; font-size: 24px; font-weight: bold;');
console.log('%cСайтът е готов! Добре дошли!', 'color: #10b981; font-size: 14px;');

// ===========================
// Analytics Placeholder
// ===========================
// Когато добавиш Google Analytics или друга аналитика:
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
*/
// ===========================
// Back to Top Button
// ===========================
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}