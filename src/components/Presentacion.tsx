import { ElementoFecha } from "./ElementoFecha";
import { Flyer } from "../model/Flyer";

export default function Presentacion() {
    
    let flyer = new Flyer;

    return (
        <>
            {flyer.presentacion()}
        </>
    );

    // return (
    //     <>
    //         <header>
    //             <h2 className="text-center mb-3">
    //                 Interclubes 2024
    //             </h2>
    //         </header>
    //         <ul className="list-group-flush p-0">
    //             <li className="list-group-item mb-3">
    //                 <ElementoFecha fecha="Primera Fecha" />
    //             </li>
    //             <li className="list-group-item mb-3">
    //                 <ElementoFecha fecha="Segunda Fecha" />
    //             </li>
    //         </ul>
    //     </>
    // );
}
