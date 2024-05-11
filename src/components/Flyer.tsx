import Partido from "@/model/Partido";

export default function Flyer( 
    {listaPartidos}:
    {listaPartidos: Array<Partido>}
) {
    /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */
    
    const listaElementos = listaPartidos.map((partido, indice) => 
        <li key={indice}>
            {`${partido.fecha} ${partido.localia}`}
        </li>
    )

    return (
        <ul>
            {listaElementos}
        </ul>
    );
}

