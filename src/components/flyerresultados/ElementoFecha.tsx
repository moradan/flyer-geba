import Partido from "@/model/Partido";
import EncabezadoFecha from "../flyer/EncabezadoFecha";
import ListaPartidos from "./ListaPartidos";

export default function ElementoFecha({
  fecha,
  listaPartidos,
}: {
  fecha: Date,
  listaPartidos: Array<Partido>,
}) {

  return (
    <li className="list-group-item mx-5 my-4 rounded">
      <EncabezadoFecha fecha={fecha} />
      {listaPartidos.length !== 0 && (
        <ListaPartidos listaPartidos={listaPartidos} />
      )}
    </li>
  );
}
