import Partido from "@/model/Partido";
import { Dispatch, SetStateAction } from "react";

export default class AdministradorDatos {
    private static setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>; 

    static inicializar(setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>) {
        AdministradorDatos.setListaPartidos = setListaPartidos;
    }
    
    static borrarPartidoEnIndice(indice: number) {
        AdministradorDatos.setListaPartidos((listaPrevia) => {
            const listaNueva = listaPrevia.toSpliced(indice - 1, 1);
            return listaNueva;
        })
    }
    
    static borrarPartido(partidoParaBorrar: Partido) {
        AdministradorDatos.setListaPartidos((listaPrevia) => {
            let indice = 0;
            for (const partidoIterado of listaPrevia) {
                if (partidoIterado === partidoParaBorrar) {
                    return listaPrevia.toSpliced(indice, 1);
                } else {
                    indice += 1;
                }
            }
            return listaPrevia;
        });
    }
    
    
  static guardar(listaPartidos: Array<Partido>, nombreFlyer: string) {
    localStorage.setItem(nombreFlyer, JSON.stringify(listaPartidos));
  }
}