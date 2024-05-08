import { ReactNode } from "react";
import { IPresentable, presentar } from "./IPresentable";

export class ContenidoVista implements IPresentable {
    
    listaFechas: IPresentable[] = [];
    
    presentacion(): ReactNode {
        const itemsPresentados = this.listaFechas.map(presentar);
        return (
            <ul>
                {itemsPresentados}
            </ul>
        );
    }
}

