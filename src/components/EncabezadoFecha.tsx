import formatDate from "@/utils/formatDate";

export default function EncabezadoFecha(
    {fecha}:
    {fecha: Date}
) {
    return (
        <header>
            <h3 className="text-center">{formatDate(fecha)}</h3>
        </header>
    );
}
