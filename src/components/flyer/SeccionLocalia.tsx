import Partido from "@/model/Partido";
import { ordenPorHorario } from "@/utils/ordenDeFechaYTiempo";
import ElementoPartido from "./ElementoPartido";

export function SeccionLocalia({
  tipo,
  listaPartidos,
}: {
  tipo: string;
  listaPartidos: Array<Partido>;
}) {
  listaPartidos.sort(ordenPorHorario);
  const listaPartidosJSX = listaPartidos.map((partido, index) => (
    <ElementoPartido partido={partido} key={index} />
  ));

  return (
    <section>
      <h4 className="text-center">{tipo}</h4>
      <ul className="list-group-flush p-0">{listaPartidosJSX}</ul>
    </section>
  );
}
