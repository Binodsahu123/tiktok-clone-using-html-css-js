let menuLis = document.querySelectorAll('.menu-bar ul li'),
    sections = document.querySelectorAll('section.box');

menuLis.forEach((li) => {
    li.addEventListener('click', (e) => {
        menuLis.forEach((li) => {
            li.classList.remove('active');
        });
        li.classList.add('active');
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        document.querySelector('.' + e.currentTarget.dataset.sec).classList.add('active');
    });
});