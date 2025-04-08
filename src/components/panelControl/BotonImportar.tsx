import Boton from "../Boton";

export default function BotonImportar({ variant }: { variant: string }) {
  return <Boton variant={variant} clickHandler={manejarClick} caption="Importar" identifier="BotonImportar" />;
}

function manejarClick() {
  const lectorExcel = document.getElementById('campoImportar') as HTMLInputElement;

  if (lectorExcel) {
    lectorExcel.value = "";
    lectorExcel.click();
  }
}