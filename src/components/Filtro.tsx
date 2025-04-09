import { Col } from "react-bootstrap";
import CampoDesde from "./CampoDesde";
import CampoHasta from "./CampoHasta";
import { ChangeEvent, useState } from "react";
import AdministradorDatos from "@/utils/AdministradorDatos";

export default function Filtro() {
    const [fechaDesde, cambiarFechaDesde] = useState<string>('');
    const [fechaHasta, cambiarFechaHasta] = useState<string>('');

    const actualizarFechaDesde = (evento: ChangeEvent<HTMLInputElement>) => {
        cambiarFechaDesde(evento.target.value);
        AdministradorDatos.filtrarPorFecha(evento.target.value, fechaHasta);
    }

    const actualizarFechaHasta = (evento: ChangeEvent<HTMLInputElement>) => {
        cambiarFechaHasta(evento.target.value);
        AdministradorDatos.filtrarPorFecha(fechaDesde, evento.target.value);
    }

    return (
        <>
            <Col>
                <CampoDesde fecha={fechaDesde} actualizador={actualizarFechaDesde}></CampoDesde>
            </Col>
            <Col>
                <CampoHasta fecha={fechaHasta} actualizador={actualizarFechaHasta}></CampoHasta>
            </Col>
        </>
    )
}