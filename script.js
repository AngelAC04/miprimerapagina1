//alert("Hola este es mi Javascript");
let nombre = "Rodrigo";
let ciudad = "AQP";
let mes = "April";

let parrafo = document.querySelector(".descripcion");

function cambiarTexto(nombre,ciudad,mes){
    let contenido = `Mi nombre es ${nombre}, soy de ${ciudad}. nací el 1 de ${mes}.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre,ciudad,mes);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
