import Partido from "@/model/Partido";
import EncabezadoFecha from "./EncabezadoFecha";
import { SeccionLocalia } from "./SeccionLocalia";

export default function ElementoFecha({
  fecha,
  listaPartidos,
}: {
  fecha: Date,
  listaPartidos: Array<Partido>,
}) {
  const partidosLocales: Array<Partido> = [];
  const partidosVisitantes: Array<Partido> = [];

  for (const partido of listaPartidos) {
    if (partido.localia == "Local") {
      partidosLocales.push(partido);
    } else {
      partidosVisitantes.push(partido);
    }
  }

  return (
    <li className="list-group-item p-5">
      <EncabezadoFecha fecha={fecha} />
      {partidosLocales.length !== 0 && (
        <SeccionLocalia tipo="Local" listaPartidos={partidosLocales} />
      )}
      {partidosVisitantes.length !== 0 && (
        <SeccionLocalia tipo="Visitante" listaPartidos={partidosVisitantes} />
      )}
    </li>
  );
}
