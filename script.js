document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PRELOADER HIDE
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 1000);
        }, 1500); 
    });

    // 2. MOBILE MENU TOGGLE
    window.toggleMenu = function() {
        const menu = document.getElementById('menuList');
        menu.classList.toggle('active');
    };

    // 3. TYPING EFFECT
    const textElement = document.querySelector('.typewriter');
    if(textElement) {
        const words = ["Digital Reality", "Future Tech", "Global Brands"];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        
        function typeEffect() {
            const currentWord = words[wordIndex];
            textElement.textContent = currentWord.substring(0, charIndex);
            
            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                setTimeout(typeEffect, 150);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                if (!isDeleting) isDeleting = true;
                else { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; }
                setTimeout(typeEffect, 1000);
            }
        }
        typeEffect();
    }

    // 4. CUSTOM MODAL (BLACK GLASS)
    const modal = document.getElementById('jobModal');
    const modalTitle = document.getElementById('modalTitle');

    window.openModal = function(role) {
        modal.style.display = 'flex'; // Opens the black modal
        modalTitle.textContent = "Apply for " + role;
    };

    window.closeModal = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 5. SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 6. SCROLL TO CONTACT
    window.scrollToContact = function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    // 7. FORM SUBMITS
    document.getElementById('modalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Application Sent to HR Manager!");
        closeModal();
    });

    document.getElementById('quoteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thanks! CEO Kamalakannan will contact you.");
        this.reset();
    });
});