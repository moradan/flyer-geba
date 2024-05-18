import { Dispatch, SetStateAction, useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export function SelectorLocalia({
  ancho,
  valor,
  actualizador,
}: {
  ancho: string;
  valor: string;
  actualizador: Dispatch<SetStateAction<string>>;
}) {
  const radios = [
    { name: "Local", value: "Local" },
    { name: "Visita", value: "Visitante" },
  ];

  return (
    <div className={ancho}>
      <div className="row">
        <ButtonGroup className="col">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline"
              name="radio"
              value={radio.value}
              checked={valor === radio.value}
              onChange={(e) => actualizador(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
