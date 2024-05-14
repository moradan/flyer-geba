import Partido from "@/model/Partido";
import Titulo from "./Titulo";
import { ReactNode } from "react";
import ElementoFecha from "./ElementoFecha";
import formatDate from "@/utils/formatDate";

export default function Flyer( 
    {listaPartidos}:
    {listaPartidos: Array<Partido>}
) {
    /* Logica para convertir datos en una representacion que siga la jerarquia
    de componentes establecida */
    
    const listaElementos: Array<ReactNode> = [];
    const listaFechas = new Map<number, Array<Partido>>();

    for (const partido of listaPartidos) {
        if (listaFechas.has(partido.fecha.getTime())) {
            listaFechas.get(partido.fecha.getTime())!.push(partido)
        } else {
            listaFechas.set(partido.fecha.getTime(), new Array<Partido>(partido))
        }
    }

    listaFechas.forEach(
        (listaPartidos, fecha) => 
            listaElementos.push(
                <ElementoFecha fecha={new Date(fecha)} listaPartidos={listaPartidos} />
            )
    );

    return (
        <>
            <Titulo titulo="Interclubes 2024" />
            <ul className="list-group-flush">
                {listaElementos}
            </ul>
        </>
    );
}