import { Dispatch, SetStateAction } from "react";

export function Campo({
  ancho,
  identifier,
  type,
  etiqueta,
  valor,
  actualizador,
}: {
  ancho: string;
  identifier: string;
  type: string;
  etiqueta: string;
  valor: string;
  actualizador: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={ancho}>
      <label htmlFor={identifier}>{etiqueta}</label>
      <input
        id={identifier}
        type={type}
        className="form-control bg-transparent border-light text-uppercase"
        value={valor}
        onChange={(e) => actualizador(e.target.value)}
        required
      />
    </div>
  );
}
