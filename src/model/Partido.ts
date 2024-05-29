export class PartidoTexto {
  fecha: string = "";
  localia: string = "";
  horario: string = "";
  adversario: string = "";
  categoria: string = "";
}

export default class Partido {
  constructor(
    public fecha: Date,
    public localia: string,
    public horario: Date,
    public adversario: string,
    public categoria: string
  ) {}

  static fromText({
    fecha,
    localia,
    horario,
    adversario,
    categoria,
  }: PartidoTexto): Partido {
    return new Partido(
      new Date(fecha),
      localia,
      new Date(horario),
      adversario,
      categoria
    );
  }
}
