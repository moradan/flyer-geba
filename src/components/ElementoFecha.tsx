import { ElementoPartido } from "./ElementoPartido";

export function ElementoFecha() {
  return (
    <div className="card border-dark p-2">
      <header>
        <h3 className="text-center">Primera Fecha</h3>
      </header>
      <section>
        <h4 className="text-center">Local</h4>
        <ul className="list-group-flush p-0">
          <li className="list-group-item">
            <ElementoPartido />
          </li>
        </ul>
      </section>
      <section>
        <h4 className="text-center">Visitante</h4>
        <ul className="list-group-flush p-0">
          <li className="list-group-item">
            <ElementoPartido />
          </li>
        </ul>
      </section>
    </div>
  );
}
