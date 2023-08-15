burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist= document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('visible');
    navlist.classList.toggle('visible');
    navbar.classList.toggle('h-nav');
})

