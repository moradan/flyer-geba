import { ContenidoVista } from "@/components/Contenido";
import { ContenidoEntity } from "@/model/ContenidoEntity";

export class ContenidoAdaptador {
    constructor(contenidoEntity: ContenidoEntity) {}

    vista(): ContenidoVista {
        return new ContenidoVista;
    }
}