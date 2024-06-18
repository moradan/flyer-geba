import BotonAbrir from "./BotonAbrir";
import BotonCompartir from "./BotonCompartir";
import BotonGuardar from "./BotonGuardar";

export default function PanelControl() {
  return (
    <nav className="row g-2">
        <BotonCompartir variant="col-12 col-md-6" />
        <BotonGuardar variant="col-12 col-md-6"/>
        <BotonAbrir variant="col-12 col-md-6" />
    </nav>
  );
}
