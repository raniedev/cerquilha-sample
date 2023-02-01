const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Mostrar menu mobile
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

//Ocultar mennu mobile
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// Mudar tema diurno/noturno
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// let vetor = [];

// for (loop = 0; loop < 10; loop++) {
//     vetor[loop] = document.querySelector("aside .sidebar a[href='#menu-" + loop + "']");
// }

// function menuAtivo() {
//     for (loop = 0; loop < 10; loop++) {
//         vetor[loop].classList.toggle('active');
//     }
//     console.log(vetor);
// }

// console.log(vetor);