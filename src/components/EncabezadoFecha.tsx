export default function EncabezadoFecha(
    {fecha}:
    {fecha: string}
) {
    return (
        <header>
            <h3 className="text-center">{fecha}</h3>
        </header>
    );
}
