import Partido from "@/model/Partido";
import Titulo from "./Titulo";
import formatDate from "./formatDate";

export default function Flyer( 
    {listaPartidos}:
    {listaPartidos: Array<Partido>}
) {
    /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */
    
    const listaElementos = listaPartidos.map((partido, indice) => 
        <li key={indice} className="list-group-item">
            {`${formatDate(partido.fecha)} ${partido.localia}`}
        </li>
    )

    return (
        <>
            <Titulo titulo="Interclubes 2024" />
            <ul className="list-group-flush">
                {listaElementos}
            </ul>
        </>
    );
}