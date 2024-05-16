import { Dispatch, SetStateAction, useState } from "react";
import { Campo } from "./Campo";
import deepcopy from "deepcopy";
import Partido from "@/model/Partido";
import parseTimeString from "../utils/parseTimeString";
import { ordenPorFecha } from "@/utils/ordenDeFechaYTiempo";

export default function Formulario( 
  { listaPartidos, actualizador, clave }:
  { listaPartidos: Array<Partido>, actualizador: Dispatch<SetStateAction<Array<Partido>>>, clave: string}
) {

  const [fecha, setFecha] = useState("");
  const [localia, setLocalia] = useState("");
  const [horario, setHorario] = useState("");
  const [adversario, setAdversario] = useState("");
  const [categoria, setCategoria] = useState("");

  function agregar() {
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const fechaParseada = new Date(fecha);
    const horarioParseado = parseTimeString(horario);
    const partidoFormulario = new Partido(fechaParseada, localia, horarioParseado, adversario, categoria);
    copiaListaPartidos.push(partidoFormulario);
    copiaListaPartidos.sort(ordenPorFecha);
    
    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);

    limpiarFormulario();

    enfocarCampoHorario();
  }
  
  function enfocarCampoHorario() {
    (document.querySelector("#CampoHorario") as HTMLElement).focus();
  }

  function limpiarFormulario() {
    setHorario("");
    setAdversario("");
    setCategoria("");
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
    <form onSubmit={(e) => {e.preventDefault(); agregar()}}>
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
            actualizador={setLocalia} />
        </div>
        <div className="col-4">
          <Campo 
            identifier="CampoHorario" 
            type="time" 
            etiqueta="Horario" 
            valor={horario}
            actualizador={setHorario} />
        </div>
        <div className="col-8">
          <Campo 
            identifier="CampoAdversario" 
            type="text" 
            etiqueta="Adversario" 
            valor={adversario}
            actualizador={setAdversario} />
        </div>
        <div className="col">
          <Campo 
            identifier="CampoCategoria"
            type="text" 
            etiqueta="Categoría"
            valor={categoria}
            actualizador={setCategoria} />
        </div>
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