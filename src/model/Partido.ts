export default class Partido {
    fecha: Date;
    localia: string;
    
    constructor(
        fecha: Date,
        localia: string,
    ) {
        this.fecha = fecha;
        this.localia = localia;
    }
}
