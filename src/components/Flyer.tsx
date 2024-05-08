import { ReactNode } from "react";
import { ContenidoVista } from "./Contenido";
import { IPresentable } from "./IPresentable";
import { PartidoEntity } from "@/model/PartidoEntity";

export class Flyer implements IPresentable {
    title: string = "Interclubes 2024";
    listaPartidos: Array<PartidoEntity>;

    constructor(listaPartidos?: Array<PartidoEntity>) {
        this.listaPartidos = listaPartidos ?? [];
    }
    
    presentacion(): ReactNode {
        const listaItems = this.listaPartidos.map<ReactNode>(
            (partidoEntity: PartidoEntity) => {
                return (
                    <li>
                        {partidoEntity.fecha} 
                        {partidoEntity.localia} 
                        {partidoEntity.horario} 
                        {partidoEntity.adversario}
                        {partidoEntity.categoria}
                    </li>
                );
            }
        );

        return (
            <>
                <header>
                    <h2 className="text-center mb-3">
                        {this.title}
                    </h2>
                </header>
                <ul>
                    {listaItems}
                </ul>
            </>
        );
    }
}