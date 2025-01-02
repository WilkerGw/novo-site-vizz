let trilho = document.querySelector('.trilho');
let body = document.querySelector('.body');
let titulos = document.querySelectorAll('.body h1');
let paragrafos = document.querySelectorAll('.body p');
let logo = document.querySelector('.banner__logo');
let instaIcon = document.querySelector('.insta-light');
let whatsIcon = document.querySelector('.whats-light');
let faceIcon = document.querySelector('.face-light');
let contatoLogo = document.querySelector('.contato__logo');
let contatoIconeInsta = document.querySelector('.contato__insta-img');
let contatoIconeWhats = document.querySelector('.contato__whats-img');
let contatoIconeFace = document.querySelector('.contato__face-img');
let headerFundo = document.querySelector('.header');
let headerListaItem = document.querySelectorAll('.header__menu-item a');
let headerSubMenu = document.querySelectorAll('.header__submenu');
let headerLogo = document.querySelector('.header__logo-img')

// Adiciona um evento de clique ao elemento 'trilho' para alternar o modo claro e escuro.
trilho.addEventListener('click', () => {
    // Alterna a classe 'light' no elemento 'trilho' (indica o estado atual do modo).
    trilho.classList.toggle('light');

    headerFundo.classList.toggle('light');

    // Alterna a classe 'light' no elemento 'body' (altera o tema geral da página).
    body.classList.toggle('light');

    // Itera sobre todos os títulos (<h1>) dentro do 'body'.
    titulos.forEach(titulo => {
        // Alterna a classe 'light' em cada título.
        titulo.classList.toggle('light');

        // Verifica se o título está no modo 'light'.
        if (titulo.classList.contains('light')) {
            // Define a cor do título no modo claro.
            titulo.style.color = '#9e9e9e';

            // Atualiza os caminhos das imagens para versões em cinza (modo claro).
            logo.src = 'img/logos/LOGO-OFICIAL-CINZA.png';
            instaIcon.src = 'img/icones/insta-cinza.png';
            whatsIcon.src = 'img/icones/whats-cinza.png';
            faceIcon.src = 'img/icones/face-cinza.png';
            contatoLogo.src = 'img/logos/LOGO-OFICIAL-CINZA.png';
            contatoIconeInsta.src = 'img/icones/insta-cinza.png';
            contatoIconeWhats.src = 'img/icones/whats-cinza.png';
            contatoIconeFace.src = 'img/icones/face-cinza.png';
            headerLogo.src = 'img/logos/LOGO-OFICIAL-CINZA.png';
            
        } else {
            // Remove a cor inline, voltando ao estilo padrão definido no CSS.
            titulo.style.color = '';

            // Atualiza os caminhos das imagens para versões padrão (modo escuro).
            logo.src = 'img/logos/LOGO-OFICIAL-DOURADA.png';
            instaIcon.src = 'img/icones/instagram.png';
            whatsIcon.src = 'img/icones/whatsapp.png';
            faceIcon.src = 'img/icones/facebook.png';
            contatoLogo.src = 'img/logos/LOGO-OFICIAL-DOURADA.png';
            contatoIconeInsta.src = 'img/icones/instagram.png';
            contatoIconeWhats.src = 'img/icones/whatsapp.png';
            contatoIconeFace.src = 'img/icones/facebook.png';
            headerLogo.src = 'img/logos/LOGO-OFICIAL-DOURADA.png';
            
        }
    });

    // Itera sobre todos os parágrafos (<p>) dentro do 'body'.
    paragrafos.forEach(paragrafo => {
        // Alterna a classe 'light' em cada parágrafo.
        paragrafo.classList.toggle('light');

        // Verifica se o parágrafo está no modo 'light'.
        if (paragrafo.classList.contains('light')) {
            // Define a cor do parágrafo no modo claro.
            paragrafo.style.color = '#7e7e7e';
        } else {
            // Remove a cor inline, voltando ao estilo padrão definido no CSS.
            paragrafo.style.color = '';
        }
    });

    // Itera sobre todas as listas (<li>) dentro do 'header'.
    headerListaItem.forEach(itemLista => {
        // Alterna a classe 'light' em cada parágrafo.
        itemLista.classList.toggle('light');

        // Verifica se o parágrafo está no modo 'light'.
        if (itemLista.classList.contains('light')) {
            // Define a cor do parágrafo no modo claro.
            itemLista.style.color = '#7e7e7e';
        } else {
            // Remove a cor inline, voltando ao estilo padrão definido no CSS.
            itemLista.style.color = '';
        }
    });

    headerSubMenu.forEach(itemSubLista => {
        // Alterna a classe 'light' em cada parágrafo.
        itemSubLista.classList.toggle('light');

        // Verifica se o parágrafo está no modo 'light'.
        if (itemSubLista.classList.contains('light')) {
            // Define a cor do parágrafo no modo claro.
            itemSubLista.style.backgroundColor = '#eeeeee';
        } else {
            // Remove a cor inline, voltando ao estilo padrão definido no CSS.
            itemSubLista.style.backgroundColor = '#444';
            //#444
        }
    });

    //headerSubMenu
});
