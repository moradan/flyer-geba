import { Contenido } from "./Contenido";

const SIN_NOMBRE = "sin nombre";
export class Flyer implements IPresentable {
    name: string = SIN_NOMBRE;
    content = new Contenido;

    presentacion(): string {
        return this.content.presentacion();
    }
}
