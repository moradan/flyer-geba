import { ElementoFecha } from "@/components/ElementoFecha";
import { Partido } from "./Partido";
import { ReactNode } from "react";
import { IPresentable } from "./IPresentable";
import * as Collections from "typescript-collections"

export class Contenido implements IPresentable, IModificable<Partido> {
    
    listaPartidos = new Collections.LinkedList<Partido>;

    agregar(partido: Partido): void {
        this.listaPartidos.add(partido);
        return;
    }
    
    borrar(partido: Partido): void {
        this.listaPartidos.remove(partido);
        return;
    }
    
    presentacion(): ReactNode {
        return <ContenidoFormateado />;
    }
}

function ContenidoFormateado(): ReactNode {
    return (
        <>
        </>
    );
}

// <ul className="list-group-flush p-0">
//     <li className="list-group-item mb-3">
//         <ElementoFecha fecha="Primera Fecha" />
//     </li>
//     <li className="list-group-item mb-3">
//         <ElementoFecha fecha="Segunda Fecha" />
//     </li>
// </ul>