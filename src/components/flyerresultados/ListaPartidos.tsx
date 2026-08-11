import Partido from "@/model/Partido";
import { ordenPorHorario } from "@/utils/ordenDeFechaYTiempo";
import ElementoPartido from "./ElementoPartido";

export default function ListaPartidos({
  listaPartidos,
}: {
  listaPartidos: Array<Partido>,
}) {
  listaPartidos.sort(ordenPorHorario);
  const listaPartidosJSX = listaPartidos.map((partido, index) => (
    <ElementoPartido partido={partido} key={index} />
  ));

  return (
    <section className="">
      <header>
        <h4 className="d-flex justify-content-around">
            <div>GEBA</div>
						<div>vs.</div>
        </h4>
      </header>
      <section>
        <ul className="list-group-flush px-0 py-1 rounded">
          {listaPartidosJSX}
        </ul>
      </section>
    </section>
  );
}
