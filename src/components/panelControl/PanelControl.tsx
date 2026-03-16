import AdministradorDatos from "@/utils/AdministradorDatos";
import BotonAbrir from "./BotonAbrir";
import BotonCompartir from "./BotonCompartir";
import BotonGuardar from "./BotonGuardar";
import BotonImportar from "./BotonImportar";
import ExcelReader from "./ExcelReader";
import Image from "next/image";

const dataUri = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3C!--License%3A%20MIT.%20Made%20by%20Ant%20Design%3A%20https%3A%2F%2Fgithub.com%2Fant-design%2Fant-design-icons--%3E%3Csvg%20width%3D%2248px%22%20height%3D%2248px%22%20viewBox%3D%220%200%201024%201024%22%20t%3D%221569683368540%22%20class%3D%22icon%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20p-id%3D%229723%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%2F%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M899.1%20869.6l-53-305.6H864c14.4%200%2026-11.6%2026-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4%200-26%2011.6-26%2026v182H160c-14.4%200-26%2011.6-26%2026v192c0%2014.4%2011.6%2026%2026%2026h17.9l-53%20305.6c-0.3%201.5-0.4%203-0.4%204.4%200%2014.4%2011.6%2026%2026%2026h723c1.5%200%203-0.1%204.4-0.4%2014.2-2.4%2023.7-15.9%2021.2-30zM204%20390h272V182h72v208h272v104H204V390z%20m468%20440V674c0-4.4-3.6-8-8-8h-48c-4.4%200-8%203.6-8%208v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4%200-8%203.6-8%208v156H202.8l45.1-260H776l45.1%20260H672z%22%20p-id%3D%229724%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E"; 

export default function PanelControl() {
  return (
    <nav className="row g-2">
			<div>
				<h1 className="text-center">
					Nombre del flyer: {AdministradorDatos.nombreFlyer}
					<Image className="px-2" src={dataUri} alt={"icono de borrar"} width="48" height="48" />
				</h1>
			</div>
      <BotonCompartir variant="col-12 col-md-6" />
      <BotonGuardar variant="col-12 col-md-6" />
      <BotonAbrir variant="col-12 col-md-6" />
      <ExcelReader />
      <BotonImportar variant="col-12 col-md-6" />
    </nav>
  );
}
