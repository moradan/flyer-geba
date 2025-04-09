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
        this.horario = new Date(0);
      }
    }
    this.horario.setFullYear(0, 0, 0);

    this.adversario = partidoTexto.adversario;
    this.categoria = partidoTexto.categoria;
  }
}

export class PartidoExcel {
  fecha: string = "";
  horario: string = "";
  localia: string="";
  equipoLocal: string = "";
  equipoVisitante: string = "";
  competencia: string = "";

  esValido(): boolean {
    return (
        this.fecha != "" &&
        this.horario != "" &&
        this.localia != "" &&
        this.equipoLocal != "" &&
        this.equipoVisitante != "" &&
        this.competencia != ""
    );
  }

  aPartido(): Partido {
    const partidoTexto = new PartidoTexto()
    const [day, month, year] = this.fecha.split('-');
    const fechaIso = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    var categoria: String;

    partidoTexto.fecha = fechaIso;
    partidoTexto.horario = this.horario;
    if (this.localia == "Local") {
      partidoTexto.localia = "Local"
      partidoTexto.adversario = this.equipoVisitante
      categoria = this.equipoLocal.slice(-1);
    } else {
      partidoTexto.localia = "Visitante"
      partidoTexto.adversario = this.equipoLocal
      categoria = this.equipoVisitante.slice(-1)
    }

    partidoTexto.categoria = this.competencia.slice(this.competencia.indexOf('-') + 1).trim();
    partidoTexto.categoria = partidoTexto.categoria.replace('Caballeros', 'Cab.');

    if (!/ [A-Z]$/i.test(partidoTexto.categoria)) {
      partidoTexto.categoria += ' ' + categoria;
    }

    const partido = new Partido(partidoTexto);
    return partido;
  }
}