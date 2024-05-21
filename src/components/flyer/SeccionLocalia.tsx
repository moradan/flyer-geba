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
      <header>
        <h4 className="d-flex justify-content-center">
          <span className="bg-primary-subtle p-1">{tipo}</span>
        </h4>
      </header>
      <section>
        <ul className="list-group-flush px-0 py-1 bg-primary text-dark rounded">
          {listaPartidosJSX}
        </ul>
      </section>
    </section>
  );
}
