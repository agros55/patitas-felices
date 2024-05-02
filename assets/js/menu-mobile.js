

document.addEventListener('DOMContentLoaded', () => {
    const iconoNav = document.querySelector('.header__icono-nav');
    const menuMobile = document.querySelector('.navegacion');

    abrirMenu()
    function abrirMenu() {
        iconoNav.addEventListener('click', (e) => {

            if(e.target.src.includes('/assets/img/hamburguesa.svg')) {

                iconoNav.src = '/assets/img/cruz-cerrar.svg';
                menuMobile.classList.add('d-block'); //Aparece el menu
                setTimeout(() => {
                    // menuMobile.style.maxHeight = menuMobile.scrollHeight + 'px';
                    menuMobile.style.display = 'block';
                }, 50);

            } else {
                iconoNav.src = '/assets/img/hamburguesa.svg';
                // menuMobile.style.maxHeight = '0';
                menuMobile.style.display = 'none';
                
                menuMobile.addEventListener('transitionend', () => {
                    menuMobile.classList.remove('d-block');
                }, { once: true });
                
            };       
        });
    };

});