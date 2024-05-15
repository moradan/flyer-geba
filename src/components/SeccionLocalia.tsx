import Partido from "@/model/Partido";
import ElementoPartido from "./ElementoPartido";

export function SeccionLocalia(
    { tipo, listaPartidos }: 
    { tipo: string, listaPartidos: Array<Partido> }
) {
    const listaElementos = listaPartidos.map(
        (partido, index) =>
            <ElementoPartido partido={partido} indice={index} />
    );

    return (
        <section>
            <h4 className="text-center">{tipo}</h4>
            <ul className="list-group-flush p-0">
                {listaElementos}
            </ul>
        </section>
    );
}
