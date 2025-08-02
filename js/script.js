// Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating skill bubbles
function createFloatingSkills() {
    const skills = [
        'HTML5', 'CSS3', 'JavaScript', 'Bootstrap',
        'Node.js', 'Express', 'MySQL', 'MongoDB',
        'React', 'API', 'Git', 'JSON'
    ];

    const container = document.getElementById('skillsContainer');

    skills.forEach((skill, index) => {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'skill-bubble';
            bubble.textContent = skill;

            // Random size
            const size = Math.random() * 40 + 60;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.fontSize = (size / 5) + 'px';

            // Random horizontal position
            bubble.style.left = Math.random() * (window.innerWidth - size) + 'px';

            // Random animation duration
            bubble.style.animationDuration = (Math.random() * 10 + 15) + 's';
            bubble.style.animationDelay = Math.random() * 5 + 's';

            container.appendChild(bubble);

            // Remove bubble after animation
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 25000);
        }, index * 2000);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close mobile menu after clicking a link
        closeMobileMenu();
    });
});

// Mobile Menu Functionality
function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // Prevent background scrolling when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function () {
    createStars();
    createFloatingSkills();

    // Continuously create new skill bubbles
    setInterval(createFloatingSkills, 15000);

    // Mobile menu event listeners
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside
    mobileNav.addEventListener('click', function (e) {
        if (e.target === mobileNav) {
            closeMobileMenu();
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});