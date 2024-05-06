import { Campo } from "./Campo";

export default function Formulario() {
  return (
    <>
      <div className="row g-2 mb-3">
        <div className="col-6">
          <Campo identifier="CampoFecha" type="date" etiqueta="Fecha" />
        </div>
        <div className="col-6">
          <Campo identifier="CampoLocalia" type="text" etiqueta="Localía" />
        </div>
        <div className="col-4">
          <Campo identifier="CampoHorario" type="time" etiqueta="Horario" />
        </div>
        <div className="col-8">
          <Campo identifier="CampoAdversario" type="text" etiqueta="Adversario" />
        </div>
        <div className="col">
          <Campo identifier="CampoCategoria" type="text" etiqueta="Categoría" />
        </div>
      </div>
      <div className="row g-1 mb-3">
        <div className="col-6">
          <input type="submit" className="btn btn-outline-dark col-12" value="Agregar" onClick={agregarPartido}/>
        </div>
        <div className="col-6">
            <input type="reset" className="btn btn-outline-dark col-12" value="Descartar" />
        </div>
      </div>
    </>
  );
}

function agregarPartido() {
  const campoFecha: HTMLInputElement | null = document.querySelector("#CampoFecha");

  if (campoFecha != null) alert(campoFecha.value);
}
