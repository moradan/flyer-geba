import { ReactNode } from "react";
import { Contenido } from "./Contenido";
import { IPresentable } from "./IPresentable";

export class Flyer implements IPresentable {
    title: string = "Interclubes 2024";
    content = new Contenido;

    presentacion(): ReactNode {
        return (
            <>
                <header>
                    <h2 className="text-center mb-3">
                        {this.title}
                    </h2>
                </header>
                {this.content.presentacion()}
            </>
        );
    }
}