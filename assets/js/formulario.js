const form = document.querySelector(".form");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const errorContainer = document.querySelector("#errorContainer"); 
const errorN = document.querySelector(".errorNombre"); 
const errorE = document.querySelector(".errorEmail"); 

const enviado = document.querySelector("#enviado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let errorValidacion = false;

  if (nombre.value.trim().length > 3) {
  } else {
    errorValidacion = true;
    errorContainer.classList.add("mostrar-error");
    errorN.textContent =
      "El nombre y apellido son demasiado cortos. Por favor, asegúrate de ingresar al menos 3 caracteres.";

    // setTimeout(() => {
    //   errorN.textContent = "";
    //   errorContainer.classList.remove("mostrar-error");
    // }, 20000);
  }

  if (email.value.trim().length > 7) {
  } else {
    errorValidacion = true;
    errorContainer.classList.add("mostrar-error");
    errorE.textContent = "El correo electrónico ingresado no es válido. Por favor, asegúrate de escribir una dirección de correo electrónico válida.";

    // setTimeout(() => {
    //   errorE.textContent = "";
    //   errorContainer.classList.remove("mostrar-error");
    // }, 20000);   
  }

  if (!errorValidacion) {
    enviado.style.display = "block";
    enviado.textContent = "Hemos recibido tu solicitud de adopción. Nos pondremos en contacto contigo en los próximos días. ¡Gracias por darle a un perrito la oportunidad de tener una familia!";
  }
});

nombre.addEventListener("input", () => {
  if (nombre.value.trim().length > 3) {
    errorN.textContent = "";
    errorContainer.classList.remove("mostrar-error");
  }
});

email.addEventListener("input", () => {
  if (email.value.trim().length > 7) {
    errorE.textContent = "";
    errorContainer.classList.remove("mostrar-error");
  }
});
