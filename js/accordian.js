//accordian with eventlistener
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            const panel = button.nextElementSibling;

            panel.classList.toggle('active');
        });
    });
});