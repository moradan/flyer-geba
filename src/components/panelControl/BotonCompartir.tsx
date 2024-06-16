import { MouseEvent, useState } from "react";
import Boton from "../Boton";
import { toJpeg } from "html-to-image";

export default function BotonCompartir() {
  function manejarClick(e: MouseEvent) {
    const nodoFlyer: HTMLElement | null = document.querySelector("#flyer-node");

    if (!nodoFlyer) {
      throw new Error("No hay un nodo en el documento HTML con id flyer-nodo.");
    }

    ocultarUI();

    toJpeg(nodoFlyer)
      .then(descargarImagen)
      .then(mostrarUI);
  }

  function descargarImagen(dataUrl: string) {
    const link = document.createElement("a");
    link.download = "flyer.jpg";
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <Boton
        caption="Compartir"
        identifier="BotonCompartir"
        clickHandler={manejarClick}
      />
    </>
  );
}

function ocultarUI() {
  const elementosIndice = document.querySelectorAll(".icono-borrar-partido");
  for(const elemento of elementosIndice) {
    elemento.classList.add("d-none");
  }
}

function mostrarUI(value: void): void | PromiseLike<void> {
  const elementosIndice = document.querySelectorAll(".icono-borrar-partido");
  for(const elemento of elementosIndice) {
    elemento.classList.remove("d-none");
  }
}

