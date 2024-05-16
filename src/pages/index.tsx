import Head from "next/head";
import PanelControl from "@/components/panelControl/PanelControl";
import Formulario from "@/components/formulario/Formulario";
import { useEffect, useState } from "react";
import Partido, { PartidoTexto } from "@/model/Partido";
import Fondo from "@/components/flyer/Fondo";
import Flyer from "@/components/flyer/Flyer";

export default function Home() {
  const clave = "Partidos";
  const [listaPartidos, setListaPartidos] = useState<Array<Partido>>([]);

  useEffect(cargarPartidos, []);

  function cargarPartidos() {
    const partidosAlmacenados: string = localStorage.getItem(clave) ?? "[]";
    const listaPartidosTexto: Array<PartidoTexto> =
      JSON.parse(partidosAlmacenados);
    const listaPartidosInicial: Array<Partido> = listaPartidosTexto.map(
      (partidoTexto) => Partido.fromText(partidoTexto)
    );
    setListaPartidos(listaPartidosInicial);
  }

  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta
          name="description"
          content="App para generar un flyer con los partidos de las fechas del mes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6">
        {/* <PanelControl /> */}
        <Formulario
          listaPartidos={listaPartidos}
          actualizador={setListaPartidos}
          clave={clave}
        />
        <main className="position-relative col d-flex flex-column align-items-center">
          <Fondo />
          <Flyer listaPartidos={listaPartidos} />
        </main>
      </div>
    </>
  );
}
