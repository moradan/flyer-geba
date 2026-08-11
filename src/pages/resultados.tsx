import Head from "next/head";
import Partido from "@/model/Partido";
import AdministradorDatos from "@/utils/AdministradorDatos";
import FlyerResultados from "@/components/flyer/FlyerResultados"; 
import Titulo from "@/components/flyer/Titulo";
import { useEffect, useState } from "react"

export default function Resultados() {
  const [listaPartidos, setListaPartidos] = useState<Array<Partido>>([]);

  useEffect(() => {
		AdministradorDatos.inicializar(listaPartidos, setListaPartidos);
		AdministradorDatos.cargarPartidos()
	}, []);

	return (
		<>
      <Head>
        <title>Resultados GEBA</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/escudo.png" />
      </Head>

      <div className='container-fluid p-0'>
        <div className='row g-0 justify-content-center'>
          <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 col-xxl-6'>
            <main id='flyer-node' className='position-relative col mb-5'>
              <FlyerResultados listaPartidos={listaPartidos} />
            </main>
					</div>
				</div>
			</div>
		</>
	);
}
