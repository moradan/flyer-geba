export class PartidoEntity {
    fecha: string;
    localia: string;
    horario: string;
    adversario: string;
    categoria: string;

    constructor(fecha: string, localia: string, horario: string, adversario: string, categoria: string) {
        this.fecha = fecha;
        this.localia = localia;
        this.horario = horario;
        this.adversario = adversario;
        this.categoria = categoria;
    }
}
