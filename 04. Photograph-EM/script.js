const openBtn = document.querySelector('#openBtn')
const closeBtn = document.querySelector('#closeBtn')
const nav = document.querySelector('.nav')
const menuText = document.querySelector('.menu-text')


openBtn.addEventListener('click', () => {
    menuText.classList.add('hidden');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    nav.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    menuText.classList.remove('hidden');
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    nav.classList.add('hidden');
})