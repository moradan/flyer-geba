import { Campo } from "./Campo";
import EstadoFormulario from "./EstadoFormulario";
import { SeleccionLocalia } from "./SeleccionLocalia";

export default function LayoutCampos({ estado }: { estado: EstadoFormulario }) {
  return (
    <div className="row align-items-end g-2 mb-3">
      <Campo
        ancho="col-6"
        identifier="CampoFecha"
        type="date"
        etiqueta="Fecha"
        valor={estado.fecha}
        actualizador={estado.setFecha}
      />
      <SeleccionLocalia
        ancho="col-6"
        identifier="CampoLocalia"
        type="text"
        etiqueta="Localía"
        valor={estado.localia}
        actualizador={estado.setLocalia}
      />
      <Campo
        ancho="col-4"
        identifier="CampoHorario"
        type="time"
        etiqueta="Horario"
        valor={estado.horario}
        actualizador={estado.setHorario}
      />
      <Campo
        ancho="col-8"
        identifier="CampoAdversario"
        type="text"
        etiqueta="Adversario"
        valor={estado.adversario}
        actualizador={estado.setAdversario}
      />
      <Campo
        ancho="col"
        identifier="CampoCategoria"
        type="text"
        etiqueta="Categoría"
        valor={estado.categoria}
        actualizador={estado.setCategoria}
      />
    </div>
  );
}
