import { ChangeEvent, useState } from "react";
import { Campo } from "./formulario/Campo";

export default function CampoHasta() {
    const [fechaHasta, cambiarFechaHasta] = useState(Date.now().toString())

    const manejarCambios = (evento: ChangeEvent<HTMLInputElement>) => {
        cambiarFechaHasta(evento.target.value);
    }

    return (
        <Campo
            ancho='col-12'
            identifier='CampoHasta'
            nombre='fechaHasta'
            type='date'
            etiqueta='Hasta'
            valor={fechaHasta}
            actualizador={manejarCambios}
        />
    );
}