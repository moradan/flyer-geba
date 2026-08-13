import Partido from "@/model/Partido";
import AdministradorDatos from "@/utils/AdministradorDatos";
import formatTime from "@/utils/formatTime";
import CampoResultado from "./CampoResultado";

export default function ElementoPartido({ partido }: { partido: Partido }) {
  const longitudTexto = partido.adversario.length + partido.categoria.length;

  // Adjust the font size based on the number of characters
  let fontSize;
  if (longitudTexto > 42) {
    fontSize = "90%";
  }

  return (
    <li className='list-group-item px-2 partido-elemento text-shadow'>
      <div className='row align-items-center fs-7 fw-bold gx-1 text-uppercase text-nowrap'>
        <div className='col-4 text-end' style={{ fontSize }}>
          {partido.categoria}
        </div>
				<div className='col-2 p-1'><CampoResultado /></div>
				<div className='col-2 p-1'><CampoResultado /></div>
        <div className='col-4' style={{ fontSize }}>
          {partido.adversario}
        </div>
      </div>
    </li>
  );
}
