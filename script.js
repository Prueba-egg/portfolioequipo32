const toggleButton = document.querySelector('.toggle-button')
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click',abrirMenu);

function abrirMenu(){
    menu.classList.toggle('open');
}