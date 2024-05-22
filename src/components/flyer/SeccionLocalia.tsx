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
          <span className="bg-primario p-1 text-capitalize">{tipo}</span>
        </h4>
      </header>
      <section>
        <ul className="list-group-flush bg-secundario text-primario px-0 py-1 rounded">
          {listaPartidosJSX}
        </ul>
      </section>
    </section>
  );
}
