/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import PanelControl from "@/components/panelControl/PanelControl";
import Formulario from "@/components/formulario/Formulario";
import { useEffect, useState } from "react";
import Partido from "@/model/Partido";
import Fondo from "@/components/flyer/Fondo";
import Flyer from "@/components/flyer/Flyer";
import { Card } from "react-bootstrap";
import AdministradorDatos from "@/utils/AdministradorDatos";
import DebugLog from "@/components/DebugLog";

export default function Home() {
  const [listaPartidos, setListaPartidos] = useState<Array<Partido>>([]);
  AdministradorDatos.inicializar(listaPartidos, setListaPartidos);

  useEffect(AdministradorDatos.cargarPartidos, []);

  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta
          name='description'
          content='Intento hacer que funcione autocompletar nativo del browser con campos controlados por ReactJS'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
                />
              </Card.Body>
              <Card.Footer>
                Flyer {AdministradorDatos.nombreFlyer}
              </Card.Footer>
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