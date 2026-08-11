import Partido from "@/model/Partido";
import AdministradorDatos from "@/utils/AdministradorDatos";
import formatTime from "@/utils/formatTime";
import CampoResultado from "./CampoResultado.tsx";

export default function ElementoPartido({ partido }: { partido: Partido }) {
  const longitudTexto = partido.adversario.length + partido.categoria.length;

  // Adjust the font size based on the number of characters
  let fontSize;
  if (longitudTexto > 42) {
    fontSize = "95%";
  }

  return (
    <li className='list-group-item px-2 partido-elemento text-shadow'>
      <div className='row fs-7 fw-bold gx-1 text-uppercase text-nowrap'>
        <div className='col-4 text-end' style={{ fontSize }}>
          {partido.categoria}
        </div>
				<div className='col-2'><CampoResultado /></div>
				<div className='col-2'><CampoResultado /></div>
        <div className='col-4 ps-3 pb-2' style={{ fontSize }}>
          {partido.adversario}
        </div>
      </div>
    </li>
  );
}
