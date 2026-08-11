import styles from "@/styles/flyerresultados.module.css";
import Titulo from "./Titulo";
import Partido from "@/model/Partido";
import { ReactNode } from "react";
import AdministradorDatos from "@/utils/AdministradorDatos";
import ElementoFecha from "../flyerresultados/ElementoFecha";

export default function FlyerResultados({ listaPartidos }: { listaPartidos: Array<Partido> }) {
  const listaFechasJSX: Array<ReactNode> = [];
  const listaFechas = new Map<number, Array<Partido>>();

  AdministradorDatos.catalogarFechas(listaFechas, listaPartidos);

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
      <Titulo className={`text-uppercase ${styles.titulo}`} titulo='Interclubes 2026' subtitulo='Resultados' />
      <main className='flex-grow-1 d-flex flex-column justify-content-center'>
        <ul className={`${styles.listaFechas} text-shadow list-group-flush p-0 pb-5`}>{listaFechasJSX}</ul>
      </main>
			<footer className={`${styles.footer} p-4 fs-2`}>
				Gimnasia y Esgrima de Buenos Aires
			</footer>
    </div>
  );
}
