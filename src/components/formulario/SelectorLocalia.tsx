import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export function SelectorLocalia({
  ancho,
  valor,
  actualizador,
}: {
  ancho: string;
  valor: string;
  actualizador: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const radios = [
    { caption: "Local", value: "Local" },
    { caption: "Visita", value: "Visitante" },
  ];

  return (
    <div className={ancho}>
      <div className='row'>
        <ButtonGroup className='col'>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type='radio'
              variant='outline'
              name='localia'
              value={radio.value}
              checked={valor === radio.value}
              onChange={actualizador}
            >
              {radio.caption}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
