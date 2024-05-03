import { ElementoFecha } from "@/components/ElementoFecha";
import { Partido } from "./Partido";
import { ReactNode } from "react";
import { IPresentable } from "./IPresentable";
import * as Collections from "typescript-collections"

export class Contenido implements IPresentable, IModificable<Partido> {
    
    listaPartidos = new Collections.LinkedList<Partido>;

    constructor() {
        this.listaPartidos.add(
            new Partido("01/07/2023", "Local", "11:00", "Independiente", "Caballeros +70")
        );
    }

    agregar(partido: Partido): void {
        this.listaPartidos.add(partido);
        return;
    }
    
    borrar(partido: Partido): void {
        this.listaPartidos.remove(partido);
        return;
    }
    
    presentacion(): ReactNode {
        return <ContenidoFormateado listaPartidos={this.listaPartidos}/>;
    }
}

function ContenidoFormateado( {listaPartidos}: {listaPartidos: Collections.LinkedList<Partido>} ): ReactNode {

    const listaPartidosArray = listaPartidos.toArray();
    const listaPartidosJSX = listaPartidosArray.map<ReactNode>(
        (partido: Partido, i: number, array: Partido[]) => 
            <li key={i.toString()} className="list-group-item mb-3">
                {partido.toString()}
            </li>
    );

    return (
        <ul className="list-group-flush p-0">
            {listaPartidosJSX}
        </ul>
    );
}

//     <li className="list-group-item mb-3">
//         <ElementoFecha fecha="Primera Fecha" />
//     </li>
//     <li className="list-group-item mb-3">
//         <ElementoFecha fecha="Segunda Fecha" />
//     </li>