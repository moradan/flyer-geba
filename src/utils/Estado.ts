import { Dispatch, SetStateAction } from "react";

type ArrayEstado<T> = [valor: T, actualizar: Dispatch<SetStateAction<T>>];

export default class Estado<T> {
  public valor: T;
  public actualizar: Dispatch<SetStateAction<T>>;

  constructor(arrayEstado: ArrayEstado<T>) {
    this.valor = arrayEstado[0];
    this.actualizar = arrayEstado[1];
  }
}
