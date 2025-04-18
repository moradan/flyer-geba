import Partido from "@/model/Partido";
import { ReactNode } from "react";
import ElementoFecha from "./ElementoFecha";
import Titulo from "./Titulo";
import Image from 'react-bootstrap/Image'

export default function Flyer({ listaPartidos }: { listaPartidos: Array<Partido> }) {
  const listaFechasJSX: Array<ReactNode> = [];
  const listaFechas = new Map<number, Array<Partido>>();

  catalogarFechas();

  listaFechas.forEach((listaPartidos, timeStamp) =>
    listaFechasJSX.push(
      <ElementoFecha
        key={timeStamp}
        fecha={new Date(timeStamp)}
        listaPartidos={listaPartidos}
      />
    )
  );

  return (
    <div className='pt-4 mb-5 font-tahoma position-relative'>
      <Titulo titulo='Interclubes' />
      <Image
        className='position-absolute end-0 top-0 p-1'
        src='/escudo.png'
        alt='escudo de GEBA'
        width='10%' />
      <ul className='list-group-flush p-0 pb-5'>{listaFechasJSX}</ul>
    </div>
  );

  function catalogarFechas() {
    for (const partido of listaPartidos) {
      const timeStamp = partido.fecha.getTime();
      if (listaFechas.has(timeStamp)) {
        listaFechas.get(timeStamp)!.push(partido);
      } else {
        listaFechas.set(timeStamp, new Array<Partido>(partido));
      }
    }
  }
}
