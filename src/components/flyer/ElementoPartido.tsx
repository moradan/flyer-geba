import Partido from "@/model/Partido";
import AdministradorDatos from "@/utils/AdministradorDatos";
import formatTime from "@/utils/formatTime";

export default function ElementoPartido({ partido }: { partido: Partido }) {
  const longitudTexto = partido.adversario.length + partido.categoria.length;

  // Adjust the font size based on the number of characters
  let fontSize;
  if (longitudTexto > 42) {
    fontSize = "95%";
  }

  function borrarPartido(e: React.MouseEvent): void {
    const horario = formatTime(partido.horario);
    if (confirm(`Estas segura que queres borrar este partido?\n ${horario} ${partido.adversario} ${partido.categoria}`)) {
      // borramos el partido. esto puede requerir que usemos un context.
      AdministradorDatos.borrarPartido(partido);
    }
  }

  return (
    <li className='list-group-item px-2 partido-elemento text-shadow'>
      <div className="icono-borrar-partido" onClick={borrarPartido}>
        <i className="bi bi-x-lg fw-bold text-white bg-danger rounded-circle"></i>
      </div>
      <div className='row fs-7 fw-bold text-white gx-1 text-uppercase text-nowrap'>
        <div className='col-1'>{formatTime(partido.horario)}</div>
        <div className='col-5 ps-3 pb-2' style={{ fontSize }}>
          {partido.adversario}
        </div>
        <div className='col-6 text-end' style={{ fontSize }}>
          {partido.categoria}
        </div>
      </div>
    </li>
  );
}
