import { PartidoTexto } from "@/model/Partido";
import deepcopy from "deepcopy";
import { Dispatch, SetStateAction } from "react";

type ArrayEstado = [valor: PartidoTexto, actualizar: Dispatch<SetStateAction<PartidoTexto>>];
export class CampoEstado {
  public nombre: string;
  public valor: unknown;
  constructor({ name, value }: { name: string; value: string }) {
    this.nombre = name;
    this.valor = value;
  }
}

/* Estado sirve para encapsular el estado de un partido. Estado contiene un PartidoTexto */
export default class Estado {
  public contenido: PartidoTexto;
  private _actualizar: Dispatch<SetStateAction<PartidoTexto>>;

  constructor(arrayEstado: ArrayEstado) {
    this.contenido = arrayEstado[0];
    this._actualizar = arrayEstado[1];
  }

  actualizar(...campos: CampoEstado[]) {
    const options = (objetoOriginal: unknown) => {
      return Object.create(Object.getPrototypeOf(objetoOriginal));
    };
    const nuevoContenido: PartidoTexto = deepcopy(this.contenido, options);
    for (const campo of campos) {
      (nuevoContenido as any)[campo.nombre] = campo.valor;
    }
    this._actualizar(nuevoContenido);
  }
}
