/**
 * Mahfujur Rahman Reaz — Portfolio Logic Engineering
 * Architecture Stack: Native Vanilla ECMA Module
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVIGATION CONTROL FLUIDITY MODULE ---
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobLinks = document.querySelectorAll('.mob-link');

    // Sticky Scroll Monitor Engine
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Toggle Mechanism
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            // Prevent underlying layout bounce when modal expands
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
        });

        // Close when overlay link triggers execution
        mobLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // --- 2. MULTI-MODE FILTERABLE PORTFOLIO COMPONENT ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.proj-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Unset current focus states on matching group
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const queryTarget = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const criteriaMatch = card.getAttribute('data-cat');

                if (queryTarget === 'all' || criteriaMatch === queryTarget) {
                    card.style.display = 'flex';
                    // Re-trigger visual entry transition values cleanly
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    // Prevent dead spatial layout alignment gaps
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 3. TIMELINE VIEWPORT INTERSECTION REVEAL ---
    const timelineItems = document.querySelectorAll('.tl-item');

    if ('IntersectionObserver' in window) {
        const entryObserverConfig = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        };

        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Kill tracking hook loop once completed
                }
            });
        }, entryObserverConfig);

        timelineItems.forEach(item => timelineObserver.observe(item));
    } else {
        // Fallback execution stack for baseline rendering engines
        timelineItems.forEach(item => item.classList.add('visible'));
    }

    // --- 4. SECURE TRANSMISSION FORM CONTROLLER (MOCK SIMULATION) ---
    const contactForm = document.getElementById('contactForm');
    const responseSuccessLabel = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Suspend standard reload behavior

            // Capture context nodes
            const nameField = document.getElementById('fname').value;
            const submitButton = contactForm.querySelector('button[type="submit"]');

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Transmitting Signals...';
            }

            // Simulate server delivery cycle validation
            setTimeout(() => {
                contactForm.reset();
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }

                if (responseSuccessLabel) {
                    responseSuccessLabel.style.display = 'block';
                    responseSuccessLabel.textContent = `Transmission verified! Thank you, ${nameField}.`;

                    // Automatically clear alert block after delay
                    setTimeout(() => {
                        responseSuccessLabel.style.display = 'none';
                    }, 5000);
                }
            }, 1200);
        });
    }
});
