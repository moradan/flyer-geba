import { MouseEventHandler } from "react";
import Boton from "../Boton";
import { Button } from "react-bootstrap";

export function LayoutBotones({ clickHandler }: { clickHandler: MouseEventHandler }) {
  return (
    <div className='row gx-2'>
      <div className='col-6'>
        <Boton identifier='botonQuitar' clickHandler={clickHandler} caption='Quitar' />
      </div>
      <div className='col-6'>
        <Button className='col-12' variant='outline-light' type='submit'>
          Agregar
        </Button>
      </div>
    </div>
  );
}
