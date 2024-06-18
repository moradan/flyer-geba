import Boton from "../Boton";

export default function BotonAbrir({ variant }: {variant: string}) {
  return <Boton variant={variant} clickHandler={manejarClick} caption="Abrir" identifier="BotonAbrir" />;
}

function manejarClick() {
  const respuesta = prompt("cual flyer queres abrir");
  
  if(respuesta) {
    localStorage.setItem("buffer", respuesta);
  }
  
  location.reload();
}