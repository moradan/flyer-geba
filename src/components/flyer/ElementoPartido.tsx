import Partido from "@/model/Partido";
import formatTime from "@/utils/formatTime";

export default function ElementoPartido( 
    { partido }:
    { partido: Partido}
) {
    return (
        <li className="list-group-item">
            <div className="row g-1">
                <div className="col-2">{formatTime(partido.horario)}</div>
                <div className="col-5">{partido.adversario}</div>
                <div className="col-5 text-end">{partido.categoria}</div>
            </div>
        </li>
    );
}
