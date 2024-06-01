import deepcopy from "deepcopy";
import { Dispatch, SetStateAction } from "react";

type ArrayEstado<T> = [valor: T, actualizar: Dispatch<SetStateAction<T>>];

export default class Estado<T> {
  public contenido: T;
  private _actualizar: Dispatch<SetStateAction<T>>;

  constructor(arrayEstado: ArrayEstado<T>) {
    this.contenido = arrayEstado[0];
    this._actualizar = arrayEstado[1];
  }

  actualizar(campo: string, valor: unknown) {
    const options = (objetoOriginal: unknown) => {
      return Object.create(Object.getPrototypeOf(objetoOriginal));
    };
    const nuevoContenido: T = deepcopy(this.contenido, options);
    // Object.setPrototypeOf(nuevoContenido, Object.getPrototypeOf(this.contenido));
    (nuevoContenido as any)[campo] = valor;
    this._actualizar(nuevoContenido);
  }
}
