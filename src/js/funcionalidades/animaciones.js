import {
  resumenServicios,
  contenedorFormIndex,
  sobreMi,
  cardServicioFontend,
  cardServicioDesign,
  cardServicioApiDB,
  cardServicioDespliegue,
  cardServicioOptimizacion,
  cardServicioEconomico,
  contenedorFormContacto,
} from "../selectores/selectores.js";

export function animaciones() {
  asignarEventos();
}
function asignarEventos() {
  implementarFadein([
    resumenServicios,
    sobreMi,
    cardServicioFontend,
    cardServicioDesign,
    contenedorFormContacto,
  ]);
  window.addEventListener("scroll", function () {
    implementarFadein([
      resumenServicios,
      contenedorFormIndex,
      sobreMi,
      cardServicioFontend,
      cardServicioDesign,
      cardServicioApiDB,
      cardServicioDespliegue,
      cardServicioOptimizacion,
      cardServicioEconomico,
      contenedorFormContacto,
    ]);
  });
}
function implementarFadein(elementos) {
  elementos.forEach((elemento) => {
    // console.log("elemento", elemento);
    if (
      !!elemento &&
      elemento.getBoundingClientRect().top < window.innerHeight - 40
    ) {
      elemento.classList.add("fade-in");
    }
  });
}
