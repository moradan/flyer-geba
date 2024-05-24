import { MouseEvent, MouseEventHandler } from "react";
import Boton from "../Boton";

export default function BotonCompartir() {
  function manejarClick(e: MouseEvent) {}

  return (
    <Boton
      caption="Compartir"
      identifier="BotonCompartir"
      clickHandler={manejarClick}
    />
  );
}
