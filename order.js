const html = document.getElementsByTagName('html')[0];
const ul = document.getElementsByTagName('ul')[0];
const menubtn = document.getElementById('menubtn');
const menu = document.getElementById('menu');
const cross = document.getElementById('cross');


menubtn.addEventListener('click', () => {
    html.classList.add('overflow-hidden')
    menu.classList.remove('hidden')
    menu.classList.add('opacity-100')
})

cross.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu.classList.add('hidden')
})

ul.addEventListener('click', () => {
    html.classList.remove('overflow-hidden')
    menu.classList.add('hidden')
})


const cards = document.querySelectorAll('.card')

let ableToPay = false;

cards.forEach(item => {

    if(item.classList.contains = 'active') {
        ableToPay = true
    } else {
        ableToPay = false
    }
    item.addEventListener('click', () => {
        cards.forEach(item => {
            item.classList.remove('active')
            item.classList.remove('border-sky-500')
        })
        item.classList.add('active')
        item.classList.add('border-sky-500')
    });
})
