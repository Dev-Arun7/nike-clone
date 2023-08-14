const mobileHeadings = document.querySelectorAll('.mobile-heading');

mobileHeadings.forEach(heading => {
    heading.addEventListener('click', () => {
        const content = heading.nextElementSibling;
        content.classList.toggle('show');
    });
});