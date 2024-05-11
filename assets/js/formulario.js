const form = document.querySelector(".form");
const nombre = document.querySelector("#nombre");


form.addEventListener('input', (e) => {
  
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim().length >= 3) {
  } else {
    const error = document.querySelector(".error");
    error.textContent = "Tenés que completar los campos obligatorios";
    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }
});
