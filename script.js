const btn = document.querySelector('.toggle-menu');
const aside = document.querySelector('aside');

const modal = document.getElementById('tutorial-calendario');

const abrirCalendario = document.getElementById('abrir-calendario');
const closeBtn = document.getElementById('cerrar-calendario');

abrirCalendario.addEventListener('click', () => {
    modal.showModal();
    modal.scrollTop = 0;
})

closeBtn.addEventListener('click', () => {
    modal.close();
})

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

