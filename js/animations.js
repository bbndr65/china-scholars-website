// Advanced Animation Controls

document.addEventListener('DOMContentLoaded', function() {
    initAdvancedAnimations();
    initCounterAnimations();
    initTypingEffect();
    initMouseFollowEffect();
});

// Advanced scroll-triggered animations
function initAdvancedAnimations() {
    // Staggered animations for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    const staggerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.service-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.2 });
    
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        // Initially hide cards
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        staggerObserver.observe(servicesGrid);
    }
}

// Counter animation for statistics (if needed in future)
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-counter'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        // Wait for page load animation to complete
        setTimeout(() => {
            typeText(heroTitle, originalText, 50);
        }, 1000);
    }
}

function typeText(element, text, speed) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            // Add cursor blink effect
            element.style.borderRight = '2px solid var(--secondary-color)';
            element.style.animation = 'blink 1s infinite';
            
            // Remove cursor after 3 seconds
            setTimeout(() => {
                element.style.borderRight = 'none';
                element.style.animation = 'none';
            }, 3000);
        }
    }, speed);
}

// Mouse follow effect for hero section
function initMouseFollowEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        
        // Create floating elements
        createFloatingElements();
        
        hero.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth animation loop
        function animate() {
            ballX += (mouseX - ballX) * 0.1;
            ballY += (mouseY - ballY) * 0.1;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.02;
                const x = ballX * speed;
                const y = ballY * speed;
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

function createFloatingElements() {
    const hero = document.querySelector('.hero');
    const elementCount = 5;
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: absolute;
            width: ${20 + i * 10}px;
            height: ${20 + i * 10}px;
            background: rgba(212, 175, 55, ${0.1 - i * 0.02});
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
        `;
        
        hero.appendChild(element);
    }
}

// Parallax effect for multiple elements
function initMultiLayerParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 10));
}

// Smooth reveal animation for text elements
function initTextRevealAnimation() {
    const textElements = document.querySelectorAll('.reveal-text');
    
    const textObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                element.innerHTML = '';
                
                // Wrap each word in a span
                const words = text.split(' ');
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' ';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    span.style.display = 'inline-block';
                    span.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
                    element.appendChild(span);
                    
                    // Trigger animation
                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    }, 100);
                });
                
                textObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    textElements.forEach(element => {
        textObserver.observe(element);
    });
}

// Image lazy loading with fade-in effect
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease-in-out';
                
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
        z-index: 1002;
        transition: width 0.1s ease-out;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Add CSS for typing effect
const typingStyles = document.createElement('style');
typingStyles.textContent = `
    @keyframes blink {
        0%, 50% { border-color: var(--secondary-color); }
        51%, 100% { border-color: transparent; }
    }
`;
document.head.appendChild(typingStyles);

// Initialize scroll progress on load
document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
});

// Utility function for debouncing (if not already defined)
if (typeof debounce === 'undefined') {
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

