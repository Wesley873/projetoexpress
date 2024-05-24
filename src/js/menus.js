import imgLogo from '../img/logo.png';

export default function menus() {
    const body = document.querySelector('body');
    const containerPrincipal = document.createElement('div');
    containerPrincipal.classList.add('container');
    body.appendChild(containerPrincipal);
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-dark', 'fixed-top', 'bg-dark');
    containerPrincipal.appendChild(navbar);
    const divNavbar = document.createElement('div');
    divNavbar.classList.add('container-fluid');
    navbar.appendChild(divNavbar);
    const linkLogo = document.createElement('a');
    linkLogo.classList.add('navbar-brand');
    linkLogo.setAttribute('href', '/');
    divNavbar.appendChild(linkLogo);

    const logo = document.createElement('img');
    logo.setAttribute('src', imgLogo, 'alt', 'logo');
    linkLogo.appendChild(logo);

    const button = document.createElement('button');
    button.classList.add('navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'offcanvas');
    button.setAttribute('data-bs-target', '#offcanvasNavbar');
    button.setAttribute('aria-controls', 'offcanvasNavbar');
    button.setAttribute('aria-label', 'Toggle navigation');
    divNavbar.appendChild(button);
    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);


    // Menu Lateral 
    const menuLateral = document.createElement('div');
    menuLateral.classList.add('offcanvas', 'offcanvas-end', 'text-bg-dark');
    menuLateral.setAttribute('tabindex', '-1');
    menuLateral.setAttribute('id', 'offcanvasDarkNavbar');
    menuLateral.setAttribute('aria-labelledby', 'offcanvasDarkNavbarLabel');

    // Cabeçalho do menu lateral
    const divMenuLateral = document.createElement('div');
    divMenuLateral.classList.add('offcanvas-header');
    menuLateral.appendChild(divMenuLateral);

    const h5 = document.createElement('h5');
    h5.classList.add('offcanvas-title');
    h5.setAttribute('id', 'offcanvasDarkNavbarLabel');
    h5.innetText = 'Menu';
    divMenuLateral.appendChild(h5);

    const buttonClose = document.createElement('button');
    buttonClose.classList.add('btn-close', 'btn-close-white');
    buttonClose.setAttribute('data-bs-dismiss', 'offcanvas');
    buttonClose.setAttribute('aria-label', 'Close');
    divMenuLateral.appendChild(buttonClose);

    // Corpo do menu lateral
    

}