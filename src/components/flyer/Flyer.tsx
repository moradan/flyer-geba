import Partido from "@/model/Partido";
import Titulo from "./Titulo";
import { ReactNode } from "react";
import ElementoFecha from "./ElementoFecha";

export default function Flyer({
  listaPartidos,
}: {
  listaPartidos: Array<Partido>;
}) {
  /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */

  const listaFechasJSX: Array<ReactNode> = [];
  const listaFechas = new Map<number, Array<Partido>>();

  catalogarFechas();

  listaFechas.forEach((listaPartidos, timeStamp) =>
    listaFechasJSX.push(
      <ElementoFecha
        fecha={new Date(timeStamp)}
        listaPartidos={listaPartidos}
      />
    )
  );

  return (
    <div className="container">
      <Titulo titulo="Interclubes 2024" />
      <ul className="list-group-flush w-100">{listaFechasJSX}</ul>
    </div>
  );

  function catalogarFechas() {
    for (const partido of listaPartidos) {
      if (listaFechas.has(partido.fecha.getTime())) {
        listaFechas.get(partido.fecha.getTime())!.push(partido);
      } else {
        listaFechas.set(partido.fecha.getTime(), new Array<Partido>(partido));
      }
    }
  }
}
