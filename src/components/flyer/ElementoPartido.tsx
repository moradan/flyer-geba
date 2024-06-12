import Partido from "@/model/Partido";
import formatTime from "@/utils/formatTime";

export default function ElementoPartido({ partido }: { partido: Partido }) {
  const longitudTexto = partido.adversario.length + partido.categoria.length;

  // Adjust the font size based on the number of characters
  let fontSize;
  if (longitudTexto > 42) {
    fontSize = "95%";
  }

  return (
    <li className='list-group-item px-2 partido-elemento'>
      <div className="text-muted partido-index">{partido.orden || "-"}</div>
      <div className='row fs-7 fw-bold gx-1 text-uppercase text-nowrap'>
        <div className='col-1'>{formatTime(partido.horario)}</div>
        <div className='col-5' style={{ fontSize }}>
          {partido.adversario}
        </div>
        <div className='col-6 text-end' style={{ fontSize }}>
          {partido.categoria}
        </div>
      </div>
    </li>
  );
}
