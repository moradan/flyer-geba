import formatDate from "@/utils/formatDate";

export default function EncabezadoFecha({ fecha }: { fecha: Date }) {
  return (
    <header>
      <h3 className="d-flex justify-content-center">
        <span className="bg-primario p-1 text-capitalize text-shadow">
          {formatDate(fecha)}
        </span>
      </h3>
    </header>
  );
}
