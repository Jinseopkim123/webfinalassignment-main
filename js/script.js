// picture carousel with eventlistener
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.picture-card-carousel');

    carousels.forEach(carousel => {
        const slider = carousel.querySelector('.card-slider');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        let slideIndex = 0;
        const totalSlides = slider.children.length;

        const showSlide = () => {
            slider.style.transform = `translateX(${-slideIndex * 100}%)`;
        };

        prevBtn.addEventListener('click', () => {
            if (slideIndex > 0) {
                slideIndex--;
            } else {
                slideIndex = totalSlides - 1;
            }
            showSlide();
        });

        nextBtn.addEventListener('click', () => {
            if (slideIndex < totalSlides - 1) {
                slideIndex++;
            } else {
                slideIndex = 0;
            }
            showSlide();
        });
    });
});

//accordian with eventlistener
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            const panel = button.nextElementSibling;

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});