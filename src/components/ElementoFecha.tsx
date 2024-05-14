import Partido from "@/model/Partido";
import EncabezadoFecha from "./EncabezadoFecha";
import { SeccionLocalia } from "../experimental/SeccionLocalia";

export default function ElementoFecha( 
  {fecha, listaPartidos}: 
  {fecha: Date, listaPartidos: Array<Partido>} 
) {
  return (
    <div className="card border-dark p-2">
      <EncabezadoFecha fecha={fecha}/>
    </div>
  );
}
