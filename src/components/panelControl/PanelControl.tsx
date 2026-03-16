import AdministradorDatos from "@/utils/AdministradorDatos";
import BotonAbrir from "./BotonAbrir";
import BotonCompartir from "./BotonCompartir";
import BotonGuardar from "./BotonGuardar";
import BotonImportar from "./BotonImportar";
import ExcelReader from "./ExcelReader";
import Image from "next/image";

const dataUri = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect x='22' y='3' rx='2' ry='2' width='6' height='16' fill='%23ffffff' /><rect x='10' y='15' rx='2' ry='2' width='30' height='6' fill='%23ffffff' /><path d='M14 16l-2 16a2 2 0 0 0 2 2h22a2 2 0 0 0 2 -2l-2 -16' stroke='%23ffffff' stroke-width='2' fill='%23ffffff' /><path d='M19 35l1 -10M31 35l-1 -10' stroke='%23000000' stroke-width='2'/><path d='M12 21.5h26' stroke='%23000000' /></svg>"; 

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
