import { MouseEventHandler } from "react";

export function LayoutBotones({
  clickHandler,
}: {
  clickHandler: MouseEventHandler;
}) {
  return (
    <div className="row g-1 mb-3">
      <div className="col-6">
        <button
          type="button"
          id="botonAgregar"
          className="btn btn-outline-dark col-12"
          onClick={clickHandler}
        >
          Agregar
        </button>
      </div>
      <div className="col-6">
        <button
          type="button"
          id="botonQuitar"
          className="btn btn-outline-dark col-12"
          onClick={clickHandler}
        >
          Borrar ultimo
        </button>
      </div>
    </div>
  );
}
