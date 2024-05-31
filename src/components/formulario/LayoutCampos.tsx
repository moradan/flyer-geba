import { PartidoTexto } from "@/model/Partido";
import { Campo } from "./Campo";
import { SelectorLocalia } from "./SelectorLocalia";
import Estado from "@/utils/Estado";
import { ChangeEvent } from "react";

export default function LayoutCampos({ estado }: { estado: Estado<PartidoTexto> }) {
  const partidoTexto = estado.valor;
  const actualizar = estado.actualizar;

  function manejarCambios(evento: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evento.target;
    let nuevoPartido: PartidoTexto = new PartidoTexto();
    Object.assign(nuevoPartido, partidoTexto);
    (nuevoPartido as any)[name] = value;

    actualizar(nuevoPartido);
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
      />
      <Campo
        ancho='col'
        identifier='CampoCategoria'
        nombre='categoria'
        type='text'
        etiqueta='Categoría'
        valor={partidoTexto.categoria}
        actualizador={manejarCambios}
      />
    </div>
  );
}
