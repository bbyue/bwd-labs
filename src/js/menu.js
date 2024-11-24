const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); 
});