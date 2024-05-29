export interface ConHorario {
  horario: Date;
}

export interface ConFecha {
  fecha: Date;
}

export interface ConTimeStamp extends ConFecha, ConHorario {}

export function ordenPorFecha(a: ConFecha, b: ConFecha) {
  return ordenDate(a.fecha, b.fecha);
}

export function ordenPorHorario(a: ConHorario, b: ConHorario) {
  return ordenDate(a.horario, b.horario);
}

export function ordenPorTimeStamp(a: ConTimeStamp, b: ConTimeStamp) {
  let orden: number = ordenPorFecha(a, b);

  if (orden === 0) {
    orden = ordenPorHorario(a, b);
  }

  return orden;
}

function ordenDate(a: Date, b: Date) {
  return a.getTime() - b.getTime();
}
