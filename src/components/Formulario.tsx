import { Campo } from "./Campo";

export default function Formulario() {
  return (
    <>
      <div className="row g-1 mb-3">
          <Campo id="CampoFecha" etiqueta="Fecha" />
          <Campo id="CampoLocalia" etiqueta="Localía" />
          <Campo id="CampoHorario" etiqueta="Horario" />
          <Campo id="CampoAdversario" etiqueta="Adversario" />
          <Campo id="CampoCategoria" etiqueta="Categoría" />
      </div>
      <div className="row g-1 mb-3">
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12">Agregar</button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-outline-dark col-12">Descartar</button>
        </div>
      </div>
    </>
  );
}
