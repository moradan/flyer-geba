import styles from "@/styles/flyer.module.css";
import Partido from "@/model/Partido";
import { ReactNode } from "react";
import ElementoFecha from "./ElementoFecha";
import Titulo from "./Titulo";
import Image from 'react-bootstrap/Image'
import AdministradorDatos from "@/utils/AdministradorDatos";

export default function Flyer({ listaPartidos }: { listaPartidos: Array<Partido> }) {
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

	// El footer debe ser visualmente invisible, solo existe como hack para poner una franja blanca al final del flyer
  return (
    <div className='d-flex flex-column pt-4 font-tahoma position-relative h-100'>
      <Titulo className={`text-uppercase ${styles.titulo}`} titulo='Interclubes 2026' subtitulo='Programación' />
      <main className='flex-grow-1 d-flex flex-column justify-content-center'>
        <ul className={`${styles.listaFechas} text-white list-group-flush p-0 pb-5`}>{listaFechasJSX}</ul>
      </main>
			<footer className='bg-white text-white p-4 fs-2'>
				Gimnasia y Esgrima de Buenos Aires
			</footer>
    </div>
  );
}
