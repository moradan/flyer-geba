import EncabezadoFecha from "./EncabezadoFecha";
import { SeccionLocalia } from "./SeccionLocalia";

export function ElementoFecha( {fecha}: {fecha: string} ) {
  return (
    <div className="card border-dark p-2">
      <EncabezadoFecha fecha={fecha}/>
      <SeccionLocalia value="Local" />
      <SeccionLocalia value="Visitante" />
    </div>
  );
}
