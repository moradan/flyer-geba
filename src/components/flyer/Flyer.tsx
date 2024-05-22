import Partido from "@/model/Partido";
import { ReactNode } from "react";
import ElementoFecha from "./ElementoFecha";
import Titulo from "./Titulo";

export default function Flyer({
  listaPartidos,
}: {
  listaPartidos: Array<Partido>;
}) {
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
    <div className="pt-4 font-tahoma">
      <Titulo titulo="Interclubes 2024" />
      <ul className="list-group-flush p-0">{listaFechasJSX}</ul>
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
