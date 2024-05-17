import formatDate from "@/utils/formatDate";

export default function EncabezadoFecha({ fecha }: { fecha: Date }) {
  return (
    <header>
      <h3 className="d-flex justify-content-center">
        <span className="bg-primary-subtle p-1 rounded">
          {formatDate(fecha)}
        </span>
      </h3>
    </header>
  );
}
