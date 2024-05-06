export class Partido {
    fecha: string = "01/01/2024";
    localia: string = "Local";
    horario: string = "09:00";
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
