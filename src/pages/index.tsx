
import Head from "next/head";
import { Inter } from "next/font/google";
import PanelControl from "@/components/PanelControl"
import Formulario from "@/components/Formulario";
import Presentacion from "@/components/Presentacion";
import { useState } from "react";
import { Flyer } from "@/components/Flyer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [flyer, setFlyer] = useState(new Flyer);

  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta name="description" content="App para generar un flyer con los partidos de las fechas del mes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 pt-3">
          <nav className="row g-1 mb-5">
            <PanelControl />
          </nav>
          <header className="col mb-5">
            <form>
              <Formulario />
            </form>
          </header>
          <main className="col">
            <Presentacion flyer={flyer} />
          </main> 
      </div>
    </>
  );
}
