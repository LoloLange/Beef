const html = document.getElementsByTagName('html')[0];
const ul = document.getElementsByTagName('ul')[0];
const ul2 = document.getElementById('ul2');
const menubtn = document.getElementById('menubtn');
const menubtn2 = document.getElementById('menubtn2');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const cross = document.getElementById('cross');
const cross2 = document.getElementById('cross2');

menubtn.addEventListener('click', () => {
    html.classList.add('overflow-hidden')
    menu.classList.remove('hidden')
    menu.classList.add('opacity-100')
})

cross.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu.classList.add('hidden')
})

menubtn2.addEventListener('click', () => {
    html.classList.add('overflow-hidden')
    menu2.classList.remove('hidden')
    menu2.classList.add('opacity-100')
})

cross2.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu2.classList.add('hidden')
})

ul.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu.classList.add('hidden')
})

ul2.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu2.classList.add('hidden')
})