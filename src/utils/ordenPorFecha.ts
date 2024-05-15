import Partido from "@/model/Partido";

export default function ordenPorFecha(a: Partido, b: Partido) {
    return a.fecha.getTime() - b.fecha.getTime();
}