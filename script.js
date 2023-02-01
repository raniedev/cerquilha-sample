//menu
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideMenu = document.querySelector("aside");
const tam = window.innerWidth;

// nav
const navSino = document.querySelector('#sino');
const navEnvelope = document.querySelector('#envelope');

//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const setaAbrir = document.querySelector("#seta-abrir");
const setaFechar = document.querySelector("#seta-fechar");

// Modificar o main container para o tablet
const mainContainer = document.querySelector("main .container");
const mainContainerFilho2 = document.querySelector("main .container:nth-child(2)");
const painelDireita = document.querySelector(".direita .painel-direita");

//Messages
const notificacoes = document.querySelector('.msgs-popup');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const procurarUsuario = document.querySelector('#procurar-usuario');

// Caixas de notificações e mensagens
const caixaNotificar = document.querySelector('.notificacoes-popup');
const caixaMsgs = document.querySelector('.msgs-popup');

//theme
const corLogo = document.querySelector('.colorir');

const theme = document.querySelector('#tema');
const themeModal = document.querySelector('.customizar');

const tamFontes = document.querySelectorAll('.escolher-tamfonte span');
var root = document.querySelector(':root');
const minhasCores = document.querySelectorAll('.escolher-cor span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//remove active class from all menu items
const mudarItemAtivo = () => {
    menuItems.forEach(item => {
        item.classList.remove('ativo');
    });
};

//Mostrar menu mobile
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

//Fechar menu mobile
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});


// Esta função combinanda com o resize irá ajustar o bug que ocorre quando fecha o menu pela versão mobile e quando maximiza para versão tablet/desktop o display do menu ficava como none. Logo, não aparecia e quebrava todo o layout
window.addEventListener("resize", checarLargura);

function checarLargura() {
    if (window.innerWidth > 768) {
        sideMenu.style.display = 'block';
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        sideMenu.style.display = 'none';
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }

    if (window.innerWidth < 768 || window.innerWidth > 1023) {
        setaAbrir.style.display = 'none';
        setaFechar.style.display = 'none';
    } else {
        setaAbrir.style.display = 'block';
        setaFechar.style.display = 'none';
    }

    if (window.innerWidth > 1023) {
        mainContainer.style.gridTemplateColumns = '18vw auto 20vw';
        painelDireita.style.display = 'block';
        mainContainerFilho2.style.gap = "1rem";
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        mainContainer.style.gridTemplateColumns = '5rem auto';
        painelDireita.style.display = 'none';
        mainContainerFilho2.style.gap = "0rem";
    } else {

    }
}

// console.log(corLogo, corLogo2);

// searches chats
const procurandoUsuario = () => {
    const val = procurarUsuario.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
};

// search chat
procurarUsuario.addEventListener('keyup', procurandoUsuario);

// Mudar o menu que está ativo
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mudarItemAtivo();
        item.classList.add('ativo');
    });
});

navSino.addEventListener('click', () => {
    // Mostra a caixa de notificações
    document.querySelector('.notificacoes-popup').style.display = 'block';
    document.querySelector('.msgs-popup').style.display = 'none';
    document.querySelector("#sino .contar-notificacoes").style.display = 'none';
    document.querySelector('.contar-notificacoes');
    // if(item.id != 'notificacoes') {
    //     document.querySelector('.notificacoes-popup').style.display = 'none';
    // } else {
    //     document.querySelector('.contar-notificacoes');
    //     // Remove o popup que alerta que tem novas notificações
    // }
});

navEnvelope.addEventListener('click', () => {
    // Mostra a caixa de notificações
    document.querySelector('.notificacoes-popup').style.display = 'none';
    document.querySelector('.msgs-popup').style.display = 'block';
    document.querySelector("#envelope .contar-notificacoes").style.display = 'none';
    document.querySelector('.contar-notificacoes');
    // if(item.id != 'notificacoes') {
    //     document.querySelector('.notificacoes-popup').style.display = 'none';
    // } else {
    //     document.querySelector('.contar-notificacoes');
    //     // Remove o popup que alerta que tem novas notificações
    // }
});

const manterNotificar = (parametro) => {
    parametro.style.display = 'block';
}

const fecharNotificar = (parametro) => {
    parametro.style.display = 'none';
}

caixaNotificar.addEventListener('mouseover', function() {
    // Função anônima que passará os parâmetros necessários
    manterNotificar(caixaNotificar);
});

caixaNotificar.addEventListener('mouseout', function() {
    // Função anônima que passará os parâmetros necessários
    fecharNotificar(caixaNotificar);
});

caixaMsgs.addEventListener('mouseover', function() {
    // Função anônima que passará os parâmetros necessários
    manterNotificar(caixaMsgs);
});

caixaMsgs.addEventListener('mouseout', function() {
    // Função anônima que passará os parâmetros necessários
    fecharNotificar(caixaMsgs);
});


// Contorna sidebar de usuários com a cor principal
// notificacoes.addEventListener('click', () => {
//     messages.style.boxShadow = '0 0 1rem var(--cor-principal)';
//     notificacoes.querySelector('.contar-notificacoes').style.display = 'none';
//     setTimeout(() => { messages.style.boxShadow = 'none' }, 2000);
// });

// theme/display customization

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customizar')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

// Fonts

// Remove classe active dos spans ou seletores de tamanho de fonte
const removerTamFonteAtivo = () => {
    tamFontes.forEach(tam => {
        tam.classList.remove('ativo');
    })
}

tamFontes.forEach(tam => {
    tam.addEventListener('click', () => {
        removerTamFonteAtivo();
        let tamFonte;
        tam.classList.toggle('ativo');

        if (tam.classList.contains('tam-fonte-1')) {
            tamFonte = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (tam.classList.contains('tam-fonte-2')) {
            tamFonte = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (tam.classList.contains('tam-fonte-3')) {
            tamFonte = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (tam.classList.contains('tam-fonte-4')) {
            tamFonte = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (tam.classList.contains('tam-fonte-5')) {
            tamFonte = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }

        // Muda o tamanho das fontes
        document.querySelector('html').style.fontSize = tamFonte;
    })
})

// remove active class from colors
const changeActiveColorClass = () => {
    minhasCores.forEach(colorPicker => {
        colorPicker.classList.remove('ativo');
    });
}

// Change primary colors
minhasCores.forEach(cor => {
    cor.addEventListener('click', () => {
        let primaryH, primaryS, primaryL, corLogo;

        // Remover a classe "active"para as cores
        changeActiveColorClass();
        
        if(cor.classList.contains('cor-1')){
            primaryH = 213;
            primaryS = 100;
            primaryL = 50;
            cor.classList.add('ativo');
            
            corLogo = "invert(37%) sepia(53%) saturate(6048%) hue-rotate(202deg) brightness(99%) contrast(113%)";
        } else if (cor.classList.contains('cor-2')) {
            primaryH = 168;
            primaryS = 76;
            primaryL = 42;
            cor.classList.add('ativo');

            corLogo = "invert(55%) sepia(67%) saturate(478%) hue-rotate(118deg) brightness(96%) contrast(95%)";
        } else if (cor.classList.contains('cor-3')) {
            primaryH = 48;
            primaryS = 89;
            primaryL = 50;
            cor.classList.add('ativo');

            corLogo = "invert(75%) sepia(83%) saturate(520%) hue-rotate(353deg) brightness(97%) contrast(94%)";
        } else if (cor.classList.contains('cor-4')) {
            primaryH = 6;
            primaryS = 73;
            primaryL = 57;
            cor.classList.add('ativo');

            corLogo = "invert(58%) sepia(53%) saturate(5856%) hue-rotate(334deg) brightness(90%) contrast(102%)";
        } else if (cor.classList.contains('cor-5')) {
            primaryH = 283;
            primaryS = 39;
            primaryL = 53;
            cor.classList.add('ativo');

            corLogo = "invert(44%) sepia(14%) saturate(2110%) hue-rotate(238deg) brightness(92%) contrast(91%)";
        }

        root.style.setProperty('--cor-principal-hue', primaryH);
        root.style.setProperty('--cor-principal-saturation', primaryS+"%");
        root.style.setProperty('--cor-principal-lightness', primaryL+"%");

        root.style.setProperty('--cor-logo', corLogo);
    });
});

// theme background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    // add active class
    Bg1.classList.add('ativo');

    // remove active class from the others
    Bg2.classList.remove('ativo');
    Bg3.classList.remove('ativo');

    // remove customized changes from local storage
    // window.location.reload();    
    changeBG();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('ativo');

    // remove active class from the others
    Bg1.classList.remove('ativo');
    Bg3.classList.remove('ativo');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('ativo');

    // remove active class from the others
    Bg1.classList.remove('ativo');
    Bg2.classList.remove('ativo');
    changeBG();
});

// Funções para rolagem da página
function voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarBase() {
    window.scrollTo( { behavior: "smooth", top: document.body.scrollHeight});
}

// Mostrar/Ocultar Aside da direita no tamanho tablet
function mostrarDireita() {
    setaAbrir.style.display = 'none';
    setaFechar.style.display = 'block';
    painelDireita.style.display = 'block';
    // Vai mostrar novamente a lateral direita
    mainContainer.style.gridTemplateColumns = "5rem auto 16rem";
    // Vai recolocar o gap para a lateral direita
    mainContainerFilho2.style.gap = "1rem";
}

function ocultarDireita() {
    setaAbrir.style.display = 'block';
    setaFechar.style.display = 'none';
    painelDireita.style.display  = 'none';
    // Vai sumir com a parte lateral direita
    mainContainer.style.gridTemplateColumns = "5rem auto";
    // Vai tirar já que a lateral direita foi removida
}