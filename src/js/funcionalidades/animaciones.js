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

const elementosFadeIn = [
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
];

export function animaciones() {
  fadeIn();
}
function fadeIn() {
  initFadein(elementosFadeIn);
  window.addEventListener("scroll", function () {
    fadeinExec(elementosFadeIn);
  });
}
function initFadein(elementos) {
  elementos.forEach((elemento) => {
    // console.log("elemento", elemento);
    if (elemento != null) {
      elemento.style.opacity = "0";
      if (elemento.getBoundingClientRect().top < window.innerHeight - 40) {
        elemento.classList.add("fade-in");
      }
    }
  });
}
function fadeinExec(elementos) {
  elementos.forEach((elemento) => {
    if (elemento != null) {
      if (elemento.getBoundingClientRect().top < window.innerHeight - 40) {
        elemento.classList.add("fade-in");
      }
    }
  });
}
