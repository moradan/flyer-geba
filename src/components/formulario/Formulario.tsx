import {
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import deepcopy from "deepcopy";
import Partido from "@/model/Partido";
import EstadoFormulario from "./EstadoFormulario";
import LayoutCampos from "./LayoutCampos";
import { LayoutBotones } from "./LayoutBotones";
import parseTimeString from "@/utils/parseTimeString";
import { ordenPorFecha } from "@/utils/ordenDeFechaYTiempo";

export default function Formulario({
  listaPartidos,
  actualizador,
  clave,
}: {
  listaPartidos: Array<Partido>;
  actualizador: Dispatch<SetStateAction<Array<Partido>>>;
  clave: string;
}) {
  const [formValid, setFormValid] = useState(false);
  const [fecha, setFecha] = useState("");
  const [localia, setLocalia] = useState("Local");
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

  useEffect(() => {
    setFormValid(
      horario !== "" &&
        adversario !== "" &&
        categoria !== "" &&
        fecha !== "" &&
        localia !== ""
    );
  });

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
        const ultimo: number = listaPartidos.length;
        const mensaje = `Decime cual linea queres borrar.\nLa ultima linea es la ${ultimo}`;
        const indiceTexto = prompt(mensaje);

        if (!indiceTexto) {
          alert("No pusiste un numero valido.");
        } else {
          const indice: number | undefined = parseInt(indiceTexto);
          borrar(indice);
        }
        break;
      default:
        break;
    }
  }

  function agregar() {
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
  }

  function enfocarCampoHorario() {
    (document.querySelector("#CampoHorario") as HTMLElement).focus();
  }

  function limpiarFormulario() {
    setHorario("");
    setAdversario("");
    setCategoria("");
  }

  function borrar(indice: number) {
    if (indice < 1 || indice > listaPartidos.length + 1) {
      alert("No pusiste un numero valido.");
      return;
    }

    const copiaListaPartidos: Array<Partido> = deepcopy(listaPartidos);
    const arraySinElemento = [
      ...copiaListaPartidos.slice(0, indice - 1),
      ...copiaListaPartidos.slice(indice),
    ];

    guardar(arraySinElemento);
    actualizador(arraySinElemento);
  }

  function guardar(listaPartidos: Array<Partido>) {
    localStorage.setItem(clave, JSON.stringify(listaPartidos));
  }

  return (
    <form className='col' onSubmit={manejarFormulario}>
      <LayoutCampos estado={estadoDelFormulario} />
      <LayoutBotones formValid={formValid} clickHandler={manejarClick} />
    </form>
  );
}
