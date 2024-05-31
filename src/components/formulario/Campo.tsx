import { ChangeEvent } from "react";

export function Campo({
  ancho,
  identifier,
  nombre,
  type,
  etiqueta,
  valor,
  actualizador,
}: {
  ancho: string;
  identifier: string;
  nombre: string;
  type: string;
  etiqueta: string;
  valor: string;
  actualizador: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={ancho}>
      <label htmlFor={identifier}>{etiqueta}</label>
      <input
        id={identifier}
        name={nombre}
        type={type}
        className='form-control bg-transparent border-light text-uppercase'
        value={valor}
        onChange={actualizador}
        autoComplete='on'
        required
      />
    </div>
  );
}
