import { Dispatch, SetStateAction, useState } from "react";
import { Campo } from "./Campo";
import deepcopy from "deepcopy";

export default function Formulario( 
  { listaFechas, actualizador }:
  { listaFechas: Array<string>, actualizador: Dispatch<SetStateAction<Array<string>>>}
) {

  const [fechaFormularioTexto, setFechaFormularioTexto] = useState("");

  function agregar() {
    const copiaListaFechas: Array<string> = deepcopy(listaFechas);

    copiaListaFechas.push(fechaFormularioTexto);
    guardar(copiaListaFechas);
    actualizador(copiaListaFechas);
  }

  function borrar() {
    const copiaListaFechas: Array<string> = deepcopy(listaFechas);

    copiaListaFechas.pop();
    guardar(copiaListaFechas);
    actualizador(copiaListaFechas)
  }

  function guardar(copiaListaFechas: string[]) {
    localStorage.setItem("Fechas", JSON.stringify(copiaListaFechas));
  }

  return (
    <form>
      <div className="row g-2 mb-3">
        <div className="col-6">
          <Campo 
            identifier="CampoFecha" 
            type="date" 
            etiqueta="Fecha"
            valor={fechaFormularioTexto}
            actualizador={setFechaFormularioTexto} />
        </div>
        {/* 
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
        */}
      </div>

      <div className="row g-1 mb-3">
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12" onClick={agregar}>Agregar</button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12" onClick={borrar}>Borrar ultimo</button>
        </div>
      </div>
    </form>
  );


}
