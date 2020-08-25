const navToggle = document.querySelector('.nav--toggle');
const navBar = document.querySelector('.nav');


navToggle.addEventListener('click', function toggleNav() {
    navBar.style.display === 'block' ? closeNavBar() : openNavBar();
})

function openNavBar() {
    navBar.style.display = 'block';
}

function closeNavBar() {
    navBar.style.display = 'none';
}