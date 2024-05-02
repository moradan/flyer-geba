import { Campo } from "./Campo";

export default function Formulario() {
  return (
    <form>
      <div className="row">
        <Campo id="CampoFecha" etiqueta="Fecha" />
        <div>
          <label htmlFor="CampoLocalia">Localía</label>
          <input id="CampoLocalia" className="form-control bg-transparent" />
        </div>
        <div>
          <label htmlFor="CampoHorario">Horario</label>
          <input id="CampoHorario" className="form-control bg-transparent" />
        </div>
        <div>
          <label htmlFor="CampoAdversario">Adversario</label>
          <input id="CampoAdversario" className="form-control bg-transparent" />
        </div>
        <div>
          <label htmlFor="CampoCategoria">Categoría</label>
          <input id="CampoCategoria" className="form-control bg-transparent" />
        </div>
      </div>
    </form>
  );
}
