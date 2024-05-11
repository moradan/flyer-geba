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
}
