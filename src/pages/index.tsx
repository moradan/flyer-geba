/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import PanelControl from "@/components/panelControl/PanelControl";
import Formulario from "@/components/formulario/Formulario";
import { useEffect, useState } from "react";
import Partido, { PartidoTexto } from "@/model/Partido";
import Fondo from "@/components/flyer/Fondo";
import Flyer from "@/components/flyer/Flyer";
import { Card } from "react-bootstrap";
import { ordenPorTimeStamp } from "@/utils/ordenDeFechaYTiempo";

export default function Home() {
  const clave = "Partidos";
  const [listaPartidos, setListaPartidos] = useState<Array<Partido>>([]);

  useEffect(cargarPartidos, []);

  function cargarPartidos() {
    const partidosAlmacenados: string = localStorage.getItem(clave) ?? "[]";
    const listaPartidosTexto: Array<PartidoTexto> = JSON.parse(partidosAlmacenados);
    const listaPartidosInicial: Array<Partido> = listaPartidosTexto.map(
      (partidoTexto) => new Partido(partidoTexto)
    );
    listaPartidosInicial.sort(ordenPorTimeStamp);
    setListaPartidos(listaPartidosInicial);
  }

  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta
          name='description'
          content='Intento hacer que funcione autocompletar nativo del browser con campos controlados por ReactJS'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        ## Bootstrap-Icon CDN Link ##
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      </Head>


      <div className='container-fluid p-0'>
        <div className='row g-0 justify-content-center'>
          <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 col-xxl-6'>
            <Card className='mt-2 mb-3 mx-2'>
              <Card.Header>
                <PanelControl />
              </Card.Header>
              <Card.Body>
                <Formulario
                  listaPartidos={listaPartidos}
                  actualizador={setListaPartidos}
                  clave={clave}
                />
              </Card.Body>
            </Card>
            <main id='flyer-node' className='position-relative col align-items-center'>
              <Fondo />
              <Flyer listaPartidos={listaPartidos} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
