// humberger


const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)

function presentation(){

    btn.classList.toggle('active')
}

const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.cont-lignes.btn1');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})