import { ContenidoEntity } from "@/model/ContenidoEntity";
import { Campo } from "./Campo";
import { Dispatch, SetStateAction } from "react";
import { Flyer } from "./Flyer";

export default function Formulario( 
) {

  function agregarPartido() {}

  function quitarPartido() {}

  return (
    <form>
      <div className="row g-2 mb-3">
        <div className="col-6">
          <Campo identifier="CampoFecha" type="date" etiqueta="Fecha" />
        </div>
        <div className="col-6">
          <Campo identifier="CampoLocalia" type="text" etiqueta="Localía" />
        </div>
        <div className="col-4">
          <Campo identifier="CampoHorario" type="time" etiqueta="Horario" />
        </div>
        <div className="col-8">
          <Campo identifier="CampoAdversario" type="text" etiqueta="Adversario" />
        </div>
        <div className="col">
          <Campo identifier="CampoCategoria" type="text" etiqueta="Categoría" />
        </div>
      </div>
      <div className="row g-1 mb-3">
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12" onClick={agregarPartido}>Agregar</button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12" onClick={quitarPartido}>Borrar ultimo</button>
        </div>
      </div>
    </form>
  );
}
