import { Dispatch, SetStateAction, useState } from "react";
import { Campo } from "./Campo";
import deepcopy from "deepcopy";
import Partido from "@/model/Partido";

export default function Formulario( 
  { listaPartidos, actualizador, clave }:
  { listaPartidos: Array<Partido>, actualizador: Dispatch<SetStateAction<Array<Partido>>>, clave: string}
) {

  const [fecha, setFecha] = useState("");
  const [localia, setLocalia] = useState("");
 
  function agregar() {
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const partidoFormulario = new Partido(new Date(Date.parse(fecha)), localia)
    copiaListaPartidos.push(partidoFormulario);
    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);

    setLocalia("");
  }

  function borrar() {
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);

    copiaListaPartidos.pop();
    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos)
  }

  function guardar(listaPartidos: Array<Partido>) {
    localStorage.setItem(clave, JSON.stringify(listaPartidos));
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row g-2 mb-3">
        <div className="col-6">
          <Campo 
            identifier="CampoFecha" 
            type="date" 
            etiqueta="Fecha"
            valor={fecha}
            actualizador={setFecha} />
        </div>
        <div className="col-6">
          <Campo 
            identifier="CampoLocalia" 
            type="text" 
            etiqueta="Localía" 
            valor={localia}
            actualizador={setLocalia}/>
        </div>
        {/* 
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
