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
    <div className='d-flex flex-column pt-4 font-tahoma position-relative h-100'>
      <Titulo titulo='Interclubes' />
      <main className='flex-grow-1 d-flex flex-column justify-content-center'>
        <ul className='list-group-flush p-0 pb-5'>{listaFechasJSX}</ul>
      </main>
      <footer className='d-flex justify-content-center pb-2'>
        <Image
          className=''
          src='/escudo.png'
          alt='escudo de GEBA'
          width='10%' />
      </footer>
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
