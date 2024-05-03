import { ElementoFecha } from "./ElementoFecha";
import { Flyer } from "../model/Flyer";

export default function Presentacion( {flyer}: {flyer: Flyer}) {
    
    return <>{flyer.presentacion()}</>;
}
