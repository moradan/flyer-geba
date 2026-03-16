import { Dispatch, FormEvent, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import Partido, { PartidoTexto } from "@/model/Partido";
import LayoutCampos from "./LayoutCampos";
import { LayoutBotones } from "./LayoutBotones";
import Estado, { CampoEstado } from "@/utils/Estado";
import AdministradorDatos from "@/utils/AdministradorDatos";
import { Accordion } from "react-bootstrap";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";

type FormularioProps = {
  listaPartidos: Array<Partido>,
  actualizador: Dispatch<SetStateAction<Array<Partido>>>
}

type ActiveKeyState = [
	AccordionEventKey,
	Dispatch<SetStateAction<AccordionEventKey>>
]

export default function Formulario({ listaPartidos, actualizador, }: FormularioProps) {
  const estadoFormulario = new Estado<PartidoTexto>(useState(new PartidoTexto()));
	const [activeKey, setActiveKey] : ActiveKeyState = useState();

	useEffect(() => {
		const savedStateJSON = sessionStorage.getItem("ui:accordion:activeKey");
		var savedState = "";

		if(savedStateJSON !== null) {
			savedState = JSON.parse(savedStateJSON);
		}
		setActiveKey(savedState);
	});

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

	function cambiarAcordion(eventKey: AccordionEventKey, e: SyntheticEvent<unknown, Event>): void {
		setActiveKey(eventKey);
		if(eventKey === null) {
			sessionStorage.removeItem("ui:accordion:activeKey");
		} else {
			sessionStorage.setItem("ui:accordion:activeKey", JSON.stringify(eventKey));
		}
	}

  return (
		<Accordion className="mi-acordion" flush activeKey={activeKey} onSelect={cambiarAcordion}>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path d='M16 7v18M7 16h18' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' fill='none'/></svg>"></img>
					<h4>
						Agregar un partido
					</h4>
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
