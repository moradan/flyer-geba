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
      <h4 className="text-center mb-0">
        <span className="bg-primary-subtle p-1 rounded">{tipo}</span>
      </h4>
      <ul className="list-group-flush p-0 bg-primary rounded">
        {listaPartidosJSX}
      </ul>
    </section>
  );
}
