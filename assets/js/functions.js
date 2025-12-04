// Typewriter 
 const words = ["IT student", "Web developer", "Problem solver"];
    let i = 0;
    let timer;

    function typingEffect(word, idx = 0) {
        const el = document.getElementById('typewriter');
        if (idx < word.length) {
            el.textContent = "I'm a " + word.substring(0, idx + 1);
            timer = setTimeout(() => typingEffect(word, idx + 1), 100);
        } else {
            setTimeout(() => erasingEffect(word), 1500);
        }
    }

    function erasingEffect(word, idx = word.length) {
        const el = document.getElementById('typewriter');
        if (idx > 0) {
            el.textContent = "I'm a " + word.substring(0, idx - 1);
            timer = setTimeout(() => erasingEffect(word, idx - 1), 50);
        } else {
            i = (i + 1) % words.length;
            setTimeout(() => typingEffect(words[i]), 500);
        }
    }

    // Light/Dark mode toggle
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const heroImg = document.getElementById('hero-img');

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
        if (heroImg) heroImg.src = 'assets/img/harsh4.png';
    } else {
        if (heroImg) heroImg.src = 'assets/img/harsh5.png';
    }

    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
            if (heroImg) heroImg.src = 'assets/img/harsh4.png';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'false');
            if (heroImg) heroImg.src = 'assets/img/harsh5.png';
        }
    });

    typingEffect(words[i]);

  // Mobile menu toggle for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if mobile menu button already exists
    let mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    // Create mobile menu button if it doesn't exist
    if (!mobileToggle) {
        mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.setAttribute('aria-label', 'Toggle menu');
        
        // Insert the button into header
        const header = document.querySelector('header');
        if (header) {
            header.appendChild(mobileToggle);
        }
    }
    
    // Toggle menu function
    mobileToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        const icon = this.querySelector('i');
        
        if (nav) {
            nav.classList.toggle('active');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Close menu when clicking on links (mobile only)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const nav = document.querySelector('nav');
                const icon = document.querySelector('.mobile-menu-toggle i');
                
                if (nav && icon) {
                    nav.classList.remove('active');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
    
    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768 && nav && nav.classList.contains('active') && 
            !nav.contains(event.target) && (!toggle || !toggle.contains(event.target))) {
            nav.classList.remove('active');
            const icon = document.querySelector('.mobile-menu-toggle i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
});

// Highlight active navbar link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


