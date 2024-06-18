import AdministradorDatos from "@/utils/AdministradorDatos";
import Boton from "../Boton";

export default function BotonGuardar( { variant }: { variant: string}) {
  return <Boton variant={variant} caption="Guardar" identifier="BotonGuardar" clickHandler={guardarFlyer}/>;
}

function guardarFlyer() {
  const nombreFlyer = prompt("Escribi un nombre para este flyer:");
  
  if (!nombreFlyer) {
    alert("No pusiste un nombre valido.");
    return;
  }

  AdministradorDatos.nombreFlyer = nombreFlyer;
  AdministradorDatos.guardar();  
}