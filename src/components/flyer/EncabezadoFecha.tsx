import formatDate from "@/utils/formatDate";

export default function EncabezadoFecha({ fecha }: { fecha: Date }) {
  return (
    <header>
      <h3 className="text-center">
        <span className="bg-primary-subtle px-1 rounded">
          {formatDate(fecha)}
        </span>
      </h3>
    </header>
  );
}
