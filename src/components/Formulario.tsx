import { Campo } from "./Campo";

export default function Formulario() {
  return (
    <div className="row">
        <Campo id="CampoFecha" etiqueta="Fecha" />
        <Campo id="CampoLocalia" etiqueta="Localía" />
        <Campo id="CampoHorario" etiqueta="Horario" />
        <Campo id="CampoAdversario" etiqueta="Adversario" />
        <Campo id="CampoCategoria" etiqueta="Categoría" />
    </div>
  );
}
