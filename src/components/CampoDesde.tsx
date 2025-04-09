import { ChangeEvent, useState } from "react";
import { Campo } from "./formulario/Campo";

export default function CampoDesde() {
    const [fechaDesde, cambiarFechaDesde] = useState(Date.now().toString())

    const manejarCambios = (evento: ChangeEvent<HTMLInputElement>) => {
        cambiarFechaDesde(evento.target.value);
    }

    return (
        <Campo
            ancho='col-12'
            identifier='CampoDesde'
            nombre='fechaDesde'
            type='date'
            etiqueta='Desde'
            valor={fechaDesde}
            actualizador={manejarCambios}
        />
    );
}