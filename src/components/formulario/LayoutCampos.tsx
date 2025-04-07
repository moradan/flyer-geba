import { PartidoTexto } from "@/model/Partido";
import { Campo } from "./Campo";
import { SelectorLocalia } from "./SelectorLocalia";
import Estado, { CampoEstado } from "@/utils/Estado";
import { ChangeEvent } from "react";

export default function LayoutCampos({ estado }: { estado: Estado<PartidoTexto> }) {
  const partidoTexto = estado.contenido;

  function manejarCambios(evento: ChangeEvent<HTMLInputElement>) {
    const campoEstado = new CampoEstado(evento.target);

    estado.actualizar(campoEstado);
    console.log(evento.target.value)
  }

  return (
    <div className='row align-items-end g-2 mb-3'>
      <Campo
        ancho='col-6'
        identifier='CampoFecha'
        nombre='fecha'
        type='date'
        etiqueta='Fecha'
        valor={partidoTexto.fecha}
        actualizador={manejarCambios}
      />
      <SelectorLocalia
        ancho='col-6'
        valor={partidoTexto.localia}
        actualizador={manejarCambios}
      />
      <Campo
        ancho='col-4'
        identifier='CampoHorario'
        nombre='horario'
        type='time'
        etiqueta='Horario'
        valor={partidoTexto.horario}
        actualizador={manejarCambios}
      />
      <Campo
        ancho='col-8'
        identifier='CampoAdversario'
        nombre='adversario'
        type='text'
        etiqueta='Adversario'
        valor={partidoTexto.adversario}
        actualizador={manejarCambios}
        autocompletar='section-adversario street-address'
      />
      <Campo
        ancho='col'
        identifier='CampoCategoria'
        nombre='categoria'
        type='text'
        etiqueta='Categoría'
        valor={partidoTexto.categoria}
        actualizador={manejarCambios}
        autocompletar='section-categoria street-address'
      />
    </div>
  );
}
