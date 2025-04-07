import Boton from "../Boton";

export default function BotonImportar({ variant }: { variant: string }) {
  return <Boton variant={variant} clickHandler={manejarClick} caption="Importar" identifier="BotonImportar" />;
}

function manejarClick() {
  document.getElementById('campoImportar')?.click();
}