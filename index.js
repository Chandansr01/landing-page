const newSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlink = document.querySelectorAll('.navlinks li');
    const wallet = document.querySelector('.conButton')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //aniamte the links
        navlink.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                 link.style.animation =`navlinkFade 0.5s ease forwards ${index / 7 + 0.2 }s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

    

}

newSlide();