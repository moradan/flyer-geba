import parseTimeString from "@/utils/parseTimeString";

const regex = /^.*?T.*?Z$/;

export class PartidoTexto {
  fecha: string = "";
  localia: string = "Local";
  horario: string = "";
  adversario: string = "";
  categoria: string = "";

  esValido(): boolean {
    return (
      this.fecha != "" &&
      this.localia != "" &&
      this.horario != "" &&
      this.adversario != "" &&
      this.categoria != ""
    );
  }
}

export default class Partido {
  fecha: Date;
  localia: string;
  horario: Date;
  adversario: string;
  categoria: string;

  constructor(partidoTexto: PartidoTexto) {
    this.fecha = new Date(partidoTexto.fecha);
    this.localia = partidoTexto.localia;

    if (regex.test(partidoTexto.horario)) {
      this.horario = new Date(partidoTexto.horario);
    } else {
      try {
        this.horario = parseTimeString(partidoTexto.horario);
      } catch (error) {
        console.error(error);
      } finally {
        this.horario = new Date();
      }
    }

    this.adversario = partidoTexto.adversario;
    this.categoria = partidoTexto.categoria;
  }
}
