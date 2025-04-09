import { ChangeEvent, useState } from "react";
import { Campo } from "./formulario/Campo";

export default function CampoHasta({
    fecha,
    actualizador
}: {
    fecha: string,
    actualizador: (e: ChangeEvent<HTMLInputElement>) => void
}) {

    return (
        <Campo
            ancho='col-12'
            identifier='CampoHasta'
            nombre='fechaHasta'
            type='date'
            etiqueta='Hasta'
            valor={fecha}
            actualizador={actualizador}
        />
    );
}