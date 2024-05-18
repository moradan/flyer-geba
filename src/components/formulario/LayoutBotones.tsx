import { MouseEventHandler } from "react";
import Boton from "../Boton";

export function LayoutBotones({
  clickHandler,
}: {
  clickHandler: MouseEventHandler;
}) {
  return (
    <div className="row gx-2 mb-3">
      <div className="col-6">
        <Boton
          identifier="botonAgregar"
          clickHandler={clickHandler}
          caption="Agregar"
        />
      </div>
      <div className="col-6">
        <Boton
          identifier="botonQuitar"
          clickHandler={clickHandler}
          caption="Quitar ultimo"
        />
      </div>
    </div>
  );
}
