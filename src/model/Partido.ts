export class PartidoTexto {
    fecha: string = "";
    localia: string = "";
    horario: string = "";
    adversario: string = "";
    categoria: string = "";
}

export default class Partido {
    fecha: Date;
    localia: string;
    horario: Date;
    adversario: string = "";
    categoria: string = "";
    
    constructor(
        fecha: Date,
        localia: string,
        horario: Date,
        adversario: string,
        categoria: string,
    ) {
        this.fecha = fecha;
        this.localia = localia;
        this.horario = horario;
        this.adversario = adversario;
        this.categoria = categoria;
    }

    static fromText({fecha, localia, horario, adversario, categoria}: PartidoTexto): Partido {
        return new Partido(new Date(fecha), localia, new Date(horario), adversario, categoria);
    }
}
