import Head from "next/head";
import { Inter } from "next/font/google";
import Acordeon from "@/components/Acordeon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Flyer GEBA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="./public/logo-geba.png" />
      </Head>
      <main className="text-success">
      </main>
    </>
  );
}
