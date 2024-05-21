import BotonNuevo from "@/components/panelControl/BotonNuevo";
import BotonCompartir from "./BotonCompartir";

export default function PanelControl() {
  return (
    <nav>
      <div className="col col-sm-6">
        <BotonCompartir />
      </div>
    </nav>
  );
}
