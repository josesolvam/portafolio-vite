import { navegacion, animaciones } from "./funcionalidades/index.js";
import "./paquetes/modernizr-custom.js";

// console.log(window.Modernizr);

document.addEventListener("DOMContentLoaded", function () {
  navegacion();
  animaciones();
});
