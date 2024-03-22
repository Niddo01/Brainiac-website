// main.js
document.addEventListener('DOMContentLoaded', function(
    ) {
        // Smooth scrolling effect for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
    });
            });
        });
    
        const backToTopBtn = document.createElement('button');
        backToTopBtn.classList.add('back-to-top');
        backToTopBtn.textContent = 'Back to Top';
        document.body.appendChild(backToTopBtn);
    
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    });
    