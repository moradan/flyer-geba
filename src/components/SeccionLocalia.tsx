import { ElementoPartido } from "./ElementoPartido";

export function SeccionLocalia({ value }: { value: string; }) {
    return (
        <section>
            <h4 className="text-center">{value}</h4>
            <ul className="list-group-flush p-0">
                <li className="list-group-item">
                    <ElementoPartido />
                </li>
            </ul>
        </section>
    );
}
