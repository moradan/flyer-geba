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

    constructor(
        fecha: string, 
        localia: string, 
        horario: string, 
        adversario: string, 
        categoria: string,
        setFecha: Dispatch<SetStateAction<string>>,
        setLocalia: Dispatch<SetStateAction<string>>,
        setHorario: Dispatch<SetStateAction<string>>,
        setAdversario: Dispatch<SetStateAction<string>>,
        setCategoria: Dispatch<SetStateAction<string>>,
    ) {
        this.fecha = fecha;
        this.localia = localia;
        this.horario = horario;
        this.adversario = adversario;
        this.categoria = categoria;

        this.setFecha = setFecha;
        this.setLocalia = setLocalia;
        this.setHorario = setHorario;
        this.setAdversario = setAdversario;
        this.setCategoria = setCategoria;
    }
}