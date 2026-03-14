import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Partido, { PartidoTexto } from "@/model/Partido";
import LayoutCampos from "./LayoutCampos";
import { LayoutBotones } from "./LayoutBotones";
import Estado, { CampoEstado } from "@/utils/Estado";
import AdministradorDatos from "@/utils/AdministradorDatos";
import { Accordion } from "react-bootstrap";

type FormularioProps = {
  listaPartidos: Array<Partido>,
  actualizador: Dispatch<SetStateAction<Array<Partido>>>
}

export default function Formulario({ listaPartidos, actualizador, }: FormularioProps) {
  const estadoFormulario = new Estado<PartidoTexto>(useState(new PartidoTexto()));

  function manejarFormulario(e: FormEvent) {
    const partidoTexto: PartidoTexto = estadoFormulario.contenido!;
    const partido = new Partido(partidoTexto);
    AdministradorDatos.agregar(partido);
    (document.querySelector("#CampoFecha") as HTMLElement).focus();
  }


  function limpiarFormulario() {
    const campos: CampoEstado[] = [
      new CampoEstado({ name: "horario", value: "" }),
      new CampoEstado({ name: "adversario", value: "" }),
      new CampoEstado({ name: "categoria", value: "" }),
    ];
    estadoFormulario.actualizar(...campos);
  }

  function dialogoParaBorrar() {
    const ultimo: number = listaPartidos.length;
    const mensaje = `Decime cual linea queres borrar.\nLa ultima linea es la ${ultimo}`;
    const indice: number | undefined = parseInt(prompt(mensaje) || "");

    if (!indice) {
      alert("No pusiste un numero valido.");
      return;
    }
    AdministradorDatos.borrarPartidoEnIndice(indice);
  }

  return (
		<Accordion className="mi-acordion" defaultActiveKey="0" flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					Agregar un partido
				</Accordion.Header>
				<Accordion.Body>
					<form className='col' onSubmit={manejarFormulario} autoComplete='on'>
					  <LayoutCampos estado={estadoFormulario} />
					  <LayoutBotones borrar={dialogoParaBorrar} />
					</form>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
  );
}
