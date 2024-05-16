import { Dispatch, SetStateAction, useState } from "react";
import deepcopy from "deepcopy";
import Partido from "@/model/Partido";
import parseTimeString from "../../utils/parseTimeString";
import { ordenPorFecha } from "@/utils/ordenDeFechaYTiempo";
import EstadoFormulario from "./EstadoFormulario";
import LayoutCampos from "./LayoutCampos";
import { LayoutBotones } from "./LayoutBotones";

export default function Formulario({
  listaPartidos,
  actualizador,
  clave,
}: {
  listaPartidos: Array<Partido>;
  actualizador: Dispatch<SetStateAction<Array<Partido>>>;
  clave: string;
}) {
  const estadoDelFormulario = new EstadoFormulario();

  function manejarFormulario() {}

  function manejarClick() {}

  function agregar() {
    /*
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const fechaParseada = new Date(fecha);
    const horarioParseado = parseTimeString(horario);
    const partidoFormulario = new Partido(
      fechaParseada,
      localia,
      horarioParseado,
      adversario,
      categoria
    );
    copiaListaPartidos.push(partidoFormulario);
    copiaListaPartidos.sort(ordenPorFecha);

    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);

    limpiarFormulario();

    enfocarCampoHorario();
    */
  }

  function enfocarCampoHorario() {
    (document.querySelector("#CampoHorario") as HTMLElement).focus();
  }

  function limpiarFormulario() {
    /*
    setHorario("");
    setAdversario("");
    setCategoria("");
    */
  }

  function borrar() {
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);

    copiaListaPartidos.pop();
    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);
  }

  function guardar(listaPartidos: Array<Partido>) {
    localStorage.setItem(clave, JSON.stringify(listaPartidos));
  }

  return (
    <form onSubmit={manejarFormulario}>
      <LayoutCampos estado={estadoDelFormulario} />

      <LayoutBotones clickHandler={manejarClick}></LayoutBotones>
    </form>
  );
}