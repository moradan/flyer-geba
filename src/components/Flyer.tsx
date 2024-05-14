import Partido from "@/model/Partido";
import Titulo from "./Titulo";
import formatDate from "./formatDate";
import formatTime from "./formatTime";

export default function Flyer( 
    {listaPartidos}:
    {listaPartidos: Array<Partido>}
) {
    /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */
    
    const listaElementos = listaPartidos.map((partido, indice) => 
        <li key={indice} className="list-group-item">
            {`${formatDate(partido.fecha)} ${partido.localia} ${formatTime(partido.horario)} ${partido.adversario} ${partido.categoria}`}
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