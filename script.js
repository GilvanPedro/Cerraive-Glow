const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', ()=> {
    menu.classList.toggle('show-menu')
});

window.sr = ScrollReveal({reset:true});

sr.reveal('.header-bottom-side-left', {duration: 600});
sr.reveal('.header-bottom-side-right', {duration: 600});
sr.reveal('.page-inner-content', {duration: 600});