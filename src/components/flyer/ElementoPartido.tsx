import Partido from "@/model/Partido";
import formatTime from "@/utils/formatTime";

export default function ElementoPartido({ partido }: { partido: Partido }) {
  return (
    <li className="list-group-item px-2">
      <div className="row fs-7 fw-bold gx-1 text-uppercase text-nowrap">
        <div className="col-1">{formatTime(partido.horario)}</div>
        <div className="col-5">{partido.adversario}</div>
        <div className="col-6 text-end">{partido.categoria}</div>
      </div>
    </li>
  );
}
