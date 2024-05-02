import { EncabezadoFecha } from "./EncabezadoFecha";
import { SeccionLocalia } from "./SeccionLocalia";

export function ElementoFecha() {
  return (
    <div className="card border-dark p-2">
      <EncabezadoFecha fecha="Primera Fecha"/>
      <SeccionLocalia value="Local" />
      <SeccionLocalia value="Visitante" />
    </div>
  );
}
