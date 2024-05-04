document.addEventListener("DOMContentLoaded", () => {
  const iconoNav = document.querySelector(".header__icono-nav");
  const menuMobile = document.querySelector(".navegacion");

  function abrirMenu() {
    iconoNav.addEventListener("click", (e) => {
      if (e.target.src.includes("/assets/img/hamburguesa.svg")) {
        iconoNav.src = "/assets/img/cruz-cerrar.svg";
        menuMobile.style.visibility = "visible";
        // menuMobile.classList.add("d-block"); //Aparece el menu
        setTimeout(() => {
          menuMobile.style.maxHeight = menuMobile.scrollHeight + "px";
        }, 50);
      } else {
        iconoNav.src = "/assets/img/hamburguesa.svg";
        menuMobile.style.maxHeight = "0";

        menuMobile.addEventListener(
          "transitionend",
          () => {
            // menuMobile.classList.remove("d-block");
            menuMobile.style.visibility = "hidden";
          },
          { once: true }
        );
      }
    });
  }

  abrirMenu();
});
