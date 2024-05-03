import { Contenido } from "./Contenido";

const VACIO = "flyer vacio";
export class Flyer implements IPresentable {
    name: string = VACIO;
    content = new Contenido;

    presentacion(): any {
        return this.content.presentacion();
    }
}
