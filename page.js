const navOpenBtn = document.getElementById('nav--open');
const navCloseBtn = document.getElementById('nav--close');
const navBar = document.querySelector('.nav');


navOpenBtn.addEventListener('click', toggleNav);

navCloseBtn.addEventListener('click', toggleNav);

function toggleNav() {
    navBar.style.display === 'block' ? closeNavBar() : openNavBar();
}

function openNavBar() {
    navBar.style.display = 'block';
    navOpenBtn.style.display = 'none';
}

function closeNavBar() {
    navBar.style.display = 'none';
    navOpenBtn.style.display = 'block';
}