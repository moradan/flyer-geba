import { Dispatch, FormEvent, MouseEvent, SetStateAction, useState } from "react";
import deepcopy from "deepcopy";
import Partido, { PartidoTexto } from "@/model/Partido";
import LayoutCampos from "./LayoutCampos";
import { LayoutBotones } from "./LayoutBotones";
import { ordenPorTimeStamp } from "@/utils/ordenDeFechaYTiempo";
import Estado, { CampoEstado } from "@/utils/Estado";

export default function Formulario({
  listaPartidos,
  actualizador,
  clave,
}: {
  listaPartidos: Array<Partido>;
  actualizador: Dispatch<SetStateAction<Array<Partido>>>;
  clave: string;
}) {
  const estadoFormulario = new Estado<PartidoTexto>(useState(new PartidoTexto()));

  function manejarFormulario(e: FormEvent) {
    e.preventDefault();
    console.log("Formulario enviado. Mentira.");
  }

  function manejarClick(e: MouseEvent) {
    const boton = e.target as HTMLElement;
    switch (boton.id) {
      case "botonAgregar":
        agregar();
        break;
      case "botonQuitar":
        borrar();
        break;
      default:
        break;
    }
  }

  function agregar() {
    const partidoTexto: PartidoTexto = estadoFormulario.contenido!;
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const partido = new Partido(partidoTexto);
    copiaListaPartidos.push(partido);
    copiaListaPartidos.sort(ordenPorTimeStamp);

    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);

    limpiarFormulario();

    enfocarCampoHorario();
  }

  function enfocarCampoHorario() {
    (document.querySelector("#CampoHorario") as HTMLElement).focus();
  }

  function limpiarFormulario() {
    const campos: CampoEstado[] = [
      new CampoEstado({ name: "horario", value: "" }),
      new CampoEstado({ name: "adversario", value: "" }),
      new CampoEstado({ name: "categoria", value: "" }),
    ];
    estadoFormulario.actualizar(...campos);
  }

  function borrar() {
    const ultimo: number = listaPartidos.length;
    const mensaje = `Decime cual linea queres borrar.\nLa ultima linea es la ${ultimo}`;
    const indiceTexto = prompt(mensaje);
    let indice: number | undefined;

    if (indiceTexto && (indice = parseInt(indiceTexto))) {
      if (indice > 0 && indice < listaPartidos.length + 1) {
      }
    } else {
      alert("No pusiste un numero valido.");
      return;
    }

    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const arraySinElemento = [
      ...copiaListaPartidos.slice(0, indice - 1),
      ...copiaListaPartidos.slice(indice),
    ];

    actualizador(arraySinElemento);
    guardar(arraySinElemento);
  }

  function guardar(listaPartidos: Array<Partido>) {
    localStorage.setItem(clave, JSON.stringify(listaPartidos));
  }

  return (
    <form className='col'>
      <LayoutCampos estado={estadoFormulario} />
      <LayoutBotones clickHandler={manejarClick} />
    </form>
  );
}
