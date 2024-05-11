
export default function Flyer( 
    {listaFechas}:
    {listaFechas: Array<string>}
) {
    /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */
    
    const listaElementos = listaFechas.map(fecha => 
        <li>
            {fecha}
        </li>
    )

    return (
        <ul>
            {listaElementos}
        </ul>
    );
}

