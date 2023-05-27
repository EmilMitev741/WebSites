// Mobile navigation 

const headerBox = document.querySelector('.nav');
const btn = document.querySelector('.btn-nav');
const openIcon = document.querySelector('.open-icon')
const closeIcon = document.querySelector('.close-icon')

btn.addEventListener('click', function () {
    headerBox.classList.toggle('nav-open');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

window.addEventListener('scroll', function () {
    headerBox.classList.remove('nav-open');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});


