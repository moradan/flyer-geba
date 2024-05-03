import { ElementoFecha } from "@/components/ElementoFecha";
import { Partido } from "./Partido";

export class Contenido implements IPresentable, IModificable<Partido> {
    
    agregar(partido: Partido): void {
        return;
    }
    
    borrar(partido: Partido): void {
        return;
    }
    
    presentacion(): any {
        return <ContenidoFormateado />;
    }
}

function ContenidoFormateado() {
    return (
        <>
            <header>
                <h2 className="text-center mb-3">
                    Interclubes 2024
                </h2>
            </header>
            <ul className="list-group-flush p-0">
                <li className="list-group-item mb-3">
                    <ElementoFecha fecha="Primera Fecha" />
                </li>
                <li className="list-group-item mb-3">
                    <ElementoFecha fecha="Segunda Fecha" />
                </li>
            </ul>
        </>
    );
}
