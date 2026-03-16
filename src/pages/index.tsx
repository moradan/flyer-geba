/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import PanelControl from "@/components/panelControl/PanelControl";
import Formulario from "@/components/formulario/Formulario";
import { useEffect, useState, useRef } from "react";
import Partido from "@/model/Partido";
import Fondo from "@/components/flyer/Fondo";
import Flyer from "@/components/flyer/Flyer";
import { Card, Col, Row } from "react-bootstrap";
import AdministradorDatos from "@/utils/AdministradorDatos";
import Filtro from "@/components/Filtro";

export default function Home() {
  const [listaPartidos, setListaPartidos] = useState<Array<Partido>>([]);
  const contenidoFlyerRef = useRef(null);

  AdministradorDatos.inicializar(listaPartidos, setListaPartidos);
  useEffect(() => AdministradorDatos.cargarPartidos(), []);


  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/escudo.png" />
      </Head>

      <div className='container-fluid p-0'>
        <div className='row g-0 justify-content-center'>
          <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 col-xxl-6'>
            <Card className='mt-2 mb-3 mx-2'>
              <Card.Header>
                <PanelControl />
              </Card.Header>
              <Card.Body className="p-0">
                <Formulario
                  listaPartidos={listaPartidos}
                  actualizador={setListaPartidos}
                />
              </Card.Body>
              <Card.Footer>
								<Row>
									<h3>
										<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path d='M4 6h24l-9 11v8l-6 3v-11z' fill='%23ffffff'/><path d='M8 10h16M10 13h12' stroke='%23000000' stroke-width='1.5' stroke-linecap='round' fill='none'/></svg>" />
										Filtro
									</h3>
								</Row>
								<Row>
									<Filtro></Filtro>
								</Row>
              </Card.Footer>
            </Card>
            <main ref={contenidoFlyerRef} id='flyer-node' className='position-relative col mb-5'>
              <Fondo contenidoFlyerRef={contenidoFlyerRef} />
              <Flyer listaPartidos={listaPartidos} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
