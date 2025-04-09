import { ChangeEvent, useState } from "react";
import { Campo } from "./formulario/Campo";

export default function CampoDesde({
    fecha,
    actualizador
}: {
    fecha: string,
    actualizador: (e: ChangeEvent<HTMLInputElement>) => void
}) {

    return (
        <Campo
            ancho='col-12'
            identifier='CampoDesde'
            nombre='fechaDesde'
            type='date'
            etiqueta='Desde'
            valor={fecha}
            actualizador={actualizador}
        />
    );
}