export class PartidoTexto {
    fecha: string = "";
    localia: string = "";
    horario: string = "";
}

export default class Partido {
    fecha: Date;
    localia: string;
    horario: Date;
    
    constructor(
        fecha: Date,
        localia: string,
        horario: Date,
    ) {
        this.fecha = fecha;
        this.localia = localia;
        this.horario = horario;
    }

    static fromText({fecha, localia, horario}: PartidoTexto): Partido {
        return new Partido(new Date(fecha), localia, new Date(horario));
    }
}
