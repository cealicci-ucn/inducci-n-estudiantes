const btn = document.querySelector('.toggle-menu');
const aside = document.querySelector('aside');

const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

btn.addEventListener('click', () => {
    aside.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    aside.classList.remove('active');
    overlay.classList.remove('active');
});

const sidebarLinks = document.querySelectorAll('aside a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        aside.classList.remove('active');
        overlay.classList.remove('active');
    });
});