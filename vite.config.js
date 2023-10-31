import { defineConfig } from "vite";
import path from "path";
// import { fileURLToPath } from "url";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: {
        // main: path.join(__dirname, "src/index.html"),
        // nested: path.join(__dirname, "src/sobre-mi.html"),
        main: path.resolve(__dirname, "src/index.html"),
        sobreMi: path.resolve(__dirname, "src/sobre-mi.html"),
        servicios: path.resolve(__dirname, "src/servicios.html"),
        contacto: path.resolve(__dirname, "src/contacto.html"),
      },
    },
  },
  // publicDir: "assets",
  // server: {
  //   port: 8080,
  // },
});
