import { Dispatch, SetStateAction, useEffect } from "react";

export function SeleccionLocalia({
  ancho,
  identifier,
  type,
  etiqueta,
  valor,
  actualizador,
}: {
  ancho: string;
  identifier: string;
  type: string;
  etiqueta: string;
  valor: string;
  actualizador: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {
    const botonLocal = document.querySelector(
      "#opcionLocal"
    ) as HTMLInputElement;
    const localia = botonLocal.getAttribute("checked");
    console.log(localia);
  }, []);

  return (
    <div className={ancho}>
      <input
        type="radio"
        className="btn-check"
        name="options-base"
        id="opcionLocal"
        checked
      />
      <label className="btn col-6" htmlFor="opcionLocal">
        Local
      </label>
      <input
        type="radio"
        className="btn-check"
        name="options-base"
        id="opcionVisita"
      />
      <label className="btn col-6" htmlFor="opcionVisita">
        Visita
      </label>
    </div>
  );
}
