export interface IConHorario {
    horario: Date;
}

export interface IFechado {
    fecha: Date;
}

export function ordenPorFecha(a: IFechado, b: IFechado) {
    return ordenDate(a.fecha, b.fecha);
}

export function ordenPorHorario(a: IConHorario, b: IConHorario) {
    return ordenDate(a.horario, b.horario);
}

function ordenDate(a: Date, b: Date) {
    return a.getTime() - b.getTime();
}