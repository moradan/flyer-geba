import { ElementoFecha } from "./ElementoFecha";

export default function Presentacion() {
    return (
        <>
            <header>
                <h2 className="text-center mb-3">
                    Interclubes 2024
                </h2>
            </header>
            <ul className="list-group-flush p-0">
                <li className="list-group-item mb-3">
                    <ElementoFecha />
                </li>
                <li className="list-group-item mb-3">
                    <ElementoFecha />
                </li>
            </ul>
        </>
    );
}