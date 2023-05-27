// ================================
// Year - All right reserved 

const yearEl = document.querySelector('.reservedYear');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;


// ================================
// Mobile navigation 

const headerBox = document.querySelector('.header-box');
const btn = document.querySelector('.btn-mob-nav');
const openIcon = document.querySelector('.open')
const closeIcon = document.querySelector('.close')

btn.addEventListener('click', function () {
    headerBox.classList.toggle('nav-open');
    openIcon.classList.toggle('current');
    closeIcon.classList.toggle('current');
});

window.addEventListener('scroll', function () {
    headerBox.classList.remove('nav-open');
    openIcon.classList.add('current');
    closeIcon.classList.remove('current');
});


