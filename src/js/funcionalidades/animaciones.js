import {
  cardServicioFontend,
  cardServicioDesign,
  cardServicioApiDB,
  cardServicioDespliegue,
  cardServicioOptimizacion,
  cardServicioEconomico,
} from "../selectores/selectores.js";

export function animaciones() {
  asignarEventos();
}
function asignarEventos() {
  implementarFadein([cardServicioFontend, cardServicioDesign]);
  window.addEventListener("scroll", function () {
    implementarFadein([
      cardServicioFontend,
      cardServicioDesign,
      cardServicioApiDB,
      cardServicioDespliegue,
      cardServicioOptimizacion,
      cardServicioEconomico,
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
