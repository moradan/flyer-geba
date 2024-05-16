import { Dispatch, SetStateAction, useState } from "react";

export default class EstadoFormulario {
    fecha: string;
    localia: string;
    horario: string;
    adversario: string;
    categoria: string;
    setFecha: Dispatch<SetStateAction<string>>;
    setLocalia: Dispatch<SetStateAction<string>>;
    setHorario: Dispatch<SetStateAction<string>>;
    setAdversario: Dispatch<SetStateAction<string>>;
    setCategoria: Dispatch<SetStateAction<string>>;

    constructor() {
        [this.fecha, this.setFecha] = useState("");
        [this.localia, this.setLocalia] = useState("");
        [this.horario, this.setHorario] = useState("");
        [this.adversario, this.setAdversario] = useState("");
        [this.categoria, this.setCategoria] = useState("");
    }
}