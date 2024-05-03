export class Partido {
    fecha: string = "01/01/1970";
    localia: string = "Local";
    horario: string = "00:00";
    adversario: string = "";
    categoria: string = "";

    constructor(fecha: string, localia: string, horario: string, adversario: string, categoria: string) {
        this.fecha = fecha;
        this.localia = localia;
        this.horario = horario;
        this.adversario = adversario;
        this.categoria = categoria;
    }

    toString(): string {
        return `${this.fecha} ${this.localia} ${this.horario} ${this.adversario} ${this.categoria}`;
    }
}
