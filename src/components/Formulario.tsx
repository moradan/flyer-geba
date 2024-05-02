import { Campo } from "./Campo";

export default function Formulario() {
  return (
    <>
      <div className="row g-2 mb-3">
        <div className="col-6">
          <Campo id="CampoFecha" type="date" etiqueta="Fecha" />
        </div>
        <div className="col-6">
          <Campo id="CampoLocalia" type="text" etiqueta="Localía" />
        </div>
        <div className="col-4">
          <Campo id="CampoHorario" type="time" etiqueta="Horario" />
        </div>
        <div className="col-8">
          <Campo id="CampoAdversario" type="text" etiqueta="Adversario" />
        </div>
        <div className="col">
          <Campo id="CampoCategoria" type="text" etiqueta="Categoría" />
        </div>
      </div>
      <div className="row g-1 mb-3">
        <div className="col-6">
          <input type="submit" className="btn btn-outline-dark col-12" value="Agregar" />
        </div>
        <div className="col-6">
            <input type="reset" className="btn btn-outline-dark col-12" value="Descartar" />
        </div>
      </div>
    </>
  );
}
