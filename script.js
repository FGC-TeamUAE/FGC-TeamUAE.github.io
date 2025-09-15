document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            burgerMenu.classList.toggle('active'); // Optional: for animating burger icon
        });
    }

    // Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-triggered fade-in animation
    const scrollFadeInElements = document.querySelectorAll('.scroll-fade-in');

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const scrollObserver = new IntersectionObserver(fadeInOnScroll, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible to trigger
    });

    scrollFadeInElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // Handle active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    mobileNavLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});