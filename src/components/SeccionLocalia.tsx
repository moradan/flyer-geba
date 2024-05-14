import Partido from "@/model/Partido";

export function SeccionLocalia(
    { tipo, listaPartidos }: 
    { tipo: string, listaPartidos: Array<Partido> }
) {
    return (
        <section>
            <h4 className="text-center">{tipo}</h4>
            <ul className="list-group-flush p-0">
                <li className="list-group-item">
                </li>
            </ul>
        </section>
    );
}
