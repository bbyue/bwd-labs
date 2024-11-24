const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); 
});

const openDialogButton = document.getElementById('openDialogButton');
const myDialog = document.getElementById('myDialog');
const closeDialogButton = document.getElementById('closeDialogButton');
openDialogButton.addEventListener('click', () => {
    myDialog.showModal();
});
closeDialogButton.addEventListener('click', () => {
    myDialog.close(); 
});
window.addEventListener('click', function(event) {
    if (event.target === myDialog) {
        myDialog.close();
    }
});

