document.addEventListener('DOMContentLoaded',function(){

    const navMenu = document.querySelector('#nav-menu');
    const menuToggle = document.querySelector('#menu-toggle');
    const bodyEl = document.body;



    menuToggle.addEventListener('click',function(){

       if(this.classList.contains('toggle-menu--active')){
        this.classList.remove('toggle-menu--active');
        navMenu.classList.remove('nav-menu--open');
        bodyEl.classList.remove('lock');
       }
       else{
        this.classList.add('toggle-menu--active');
        navMenu.classList.add('nav-menu--open');
        bodyEl.classList.add('lock');
       }

    })

    navMenu.addEventListener('click',function(){
        this.classList.remove('nav-menu--open');
        menuToggle.classList.remove('toggle-menu--active');
        bodyEl.classList.remove('lock');

    });


});