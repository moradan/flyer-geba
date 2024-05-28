import { MouseEvent, useState } from "react";
import Boton from "../Boton";
import { toJpeg } from "html-to-image";
import { Options } from "html-to-image/lib/types";

export default function BotonCompartir() {
  function manejarClick(e: MouseEvent) {
    const nodoFlyer: HTMLElement | null = document.querySelector("#flyer-node");

    if (!nodoFlyer) {
      throw new Error("No hay un nodo en el documento HTML con id flyer-nodo.");
    }

    toJpeg(nodoFlyer).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "flyer.jpg";
      link.href = dataUrl;
      link.click();
    });
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
