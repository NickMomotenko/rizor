let menuFucntion = () =>{
    let burger  = document.querySelector('.burger');
    let menu = document.querySelector('.fullscreen');
    let body = document.querySelector('body');
    
    let links = document.querySelectorAll('.menu__link');
    
    links.forEach(function(element){
      element.addEventListener('click' , toggleMenu);
    })
    
    function toggleMenu(){
      burger.classList.toggle('burger--active');
      menu.classList.toggle('fullscreen--active');
      body.classList.toggle('body--active-menu');
    }
    
    burger.addEventListener('click' , toggleMenu);
}

menuFucntion();



