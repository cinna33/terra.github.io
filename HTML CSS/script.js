const toggleBtn = document.querySelector('.toggle');
const toggleBtnIIcon = document.querySelector('.toggle i')
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars-staggered fa-flip-horizontal'
}



window.onscroll = function() { 
    changeNavbarColor(); 
};

function changeNavbarColor(){
    let navbar = document.querySelector('header');
    if (window.pageYOffset > 50){
        navbar.classList.add('navbar-black');
    } else{
        navbar.classList.remove('navbar-black')
    }
}

console.log('navbar');