document.addEventListener('DOMContentLoaded', function () {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const revealOnScroll = () => {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight - 150; 

            if (isVisible) {
                section.classList.add('is-visible');
            } else {
                section.classList.remove('is-visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
});
