import { Dispatch, SetStateAction, useState } from "react";
import deepcopy from "deepcopy";
import Partido from "@/model/Partido";
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
  const [fecha, setFecha] = useState("");
  const [localia, setLocalia] = useState("");
  const [horario, setHorario] = useState("");
  const [adversario, setAdversario] = useState("");
  const [categoria, setCategoria] = useState("");
  const estadoDelFormulario = new EstadoFormulario(
    fecha,
    localia,
    horario,
    adversario,
    categoria,
    setFecha,
    setLocalia,
    setHorario,
    setAdversario,
    setCategoria
  );

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
    <form className="col mb-5" onSubmit={manejarFormulario}>
      <LayoutCampos estado={estadoDelFormulario} />

      <LayoutBotones clickHandler={manejarClick}></LayoutBotones>
    </form>
  );
}
