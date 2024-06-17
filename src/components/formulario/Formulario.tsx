import { Dispatch, FormEvent, SetStateAction, useState } from "react";
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
    // e.preventDefault();
    agregar();
    // limpiarFormulario();
    (document.querySelector("#CampoFecha") as HTMLElement).focus();
  }

  function agregar() {
    const partidoTexto: PartidoTexto = estadoFormulario.contenido!;
    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);

    const orden = copiaListaPartidos.length;
    partidoTexto.orden = orden;
   
    const partido = new Partido(partidoTexto);
    copiaListaPartidos.push(partido);
    copiaListaPartidos.sort(ordenPorTimeStamp);

    guardar(copiaListaPartidos);
    actualizador(copiaListaPartidos);
  }

  function limpiarFormulario() {
    const campos: CampoEstado[] = [
      new CampoEstado({ name: "horario", value: "" }),
      new CampoEstado({ name: "adversario", value: "" }),
      new CampoEstado({ name: "categoria", value: "" }),
    ];
    estadoFormulario.actualizar(...campos);
  }

  function dialogoParaBorrar() {
    const ultimo: number = listaPartidos.length;
    const mensaje = `Decime cual linea queres borrar.\nLa ultima linea es la ${ultimo}`;
    const indice: number | undefined = parseInt(prompt(mensaje) || "");

    if (!indice) {
      alert("No pusiste un numero valido.");
      return;
    }

    const arraySinElemento = listaPartidos.toSpliced(indice - 1, 1); 

    actualizador(arraySinElemento);
    guardar(arraySinElemento);
  }

  function guardar(listaPartidos: Array<Partido>) {
    localStorage.setItem(clave, JSON.stringify(listaPartidos));
  }

  return (
    <form className='col' onSubmit={manejarFormulario} autoComplete='on'>
      <LayoutCampos estado={estadoFormulario} />
      <LayoutBotones borrar={dialogoParaBorrar} />
    </form>
  );
}
