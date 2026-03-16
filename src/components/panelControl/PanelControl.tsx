import AdministradorDatos from "@/utils/AdministradorDatos";
import BotonAbrir from "./BotonAbrir";
import BotonCompartir from "./BotonCompartir";
import BotonGuardar from "./BotonGuardar";
import BotonImportar from "./BotonImportar";
import ExcelReader from "./ExcelReader";

export default function PanelControl() {
  return (
    <nav className="row g-2">
			<div>
				<h1 className="text-center">Nombre del flyer: {AdministradorDatos.nombreFlyer}</h1>
			</div>
      <BotonCompartir variant="col-12 col-md-6" />
      <BotonGuardar variant="col-12 col-md-6" />
      <BotonAbrir variant="col-12 col-md-6" />
      <ExcelReader />
      <BotonImportar variant="col-12 col-md-6" />
    </nav>
  );
}
