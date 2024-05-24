import { MouseEvent, useState } from "react";
import Boton from "../Boton";
import { toJpeg } from "html-to-image";

export default function BotonCompartir() {
  const [imgUrl, setImgUrl] = useState("");

  function manejarClick(e: MouseEvent) {
    const nodoFlyer: HTMLElement | null = document.querySelector("#flyer-node");
    toJpeg(nodoFlyer!).then((dataUrl) => {
      setImgUrl(dataUrl);
    });
  }

  return (
    <>
      <Boton
        caption="Compartir"
        identifier="BotonCompartir"
        clickHandler={manejarClick}
      />
      <a href={imgUrl}>Imagen</a>
    </>
  );
}
