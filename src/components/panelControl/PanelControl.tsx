import BotonNuevo from "@/components/panelControl/BotonNuevo";
import BotonCompartir from "./BotonCompartir";

export default function PanelControl() {
  return (
    <nav className="row g-1 mt-3 mb-5">
      <div className="col col-sm-6">
        <BotonNuevo />
      </div>
      <div className="col col-sm-6">
        <BotonCompartir />
      </div>
    </nav>
  );
}
