import { ChangeEvent, useEffect, useState } from "react";

export function Campo({
  ancho,
  identifier,
  nombre,
  type,
  etiqueta,
  valor,
  actualizador,
  autocompletar = false,
}: {
  ancho: string;
  identifier: string;
  nombre: string;
  type: string;
  etiqueta: string;
  valor: string;
  actualizador: (e: ChangeEvent<HTMLInputElement>) => void;
  autocompletar?: boolean;
}) {
  const [valoresAutocompletar, setValoresAutocompletar] = useState<string[]>([]);

  if (autocompletar) {
    useEffect(() => {
      const storedTextArray = localStorage.getItem(nombre);
      if (storedTextArray) {
        setValoresAutocompletar(JSON.parse(storedTextArray));
      }
    }, [nombre]);
  }

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
        required
      />
    </div>
  );
}
