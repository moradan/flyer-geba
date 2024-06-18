import Partido, { PartidoTexto } from "@/model/Partido";
import { Dispatch, SetStateAction } from "react";
import { ordenPorTimeStamp } from "./ordenDeFechaYTiempo";

export default class AdministradorDatos {
    private static setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>; 
    private static listaPartidos: Array<Partido>;
    private static nombreFlyer: string;
   
    private constructor() {}

    static inicializar(listaPartidos: Array<Partido>, setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>, nombreFlyer: string) {
        AdministradorDatos.nombreFlyer = nombreFlyer;
        AdministradorDatos.listaPartidos = listaPartidos;
        AdministradorDatos.setListaPartidos = setListaPartidos;
    }
    
    static cargarPartidos() {
        console.log("Esto se ejecuta una sola vez cuando la pagina se carga.");
        const partidosAlmacenados: string = localStorage.getItem(AdministradorDatos.nombreFlyer) ?? "[]";
        const listaPartidosTexto: Array<PartidoTexto> = JSON.parse(partidosAlmacenados);
        const listaPartidosInicial: Array<Partido> = listaPartidosTexto.map(
          (partidoTexto) => new Partido(partidoTexto)
        );
        listaPartidosInicial.sort(ordenPorTimeStamp);
        AdministradorDatos.setListaPartidos(listaPartidosInicial);
    }

    static borrarPartidoEnIndice(indice: number) {
        AdministradorDatos.setListaPartidos((listaPrevia) => {
            const listaNueva = listaPrevia.toSpliced(indice - 1, 1);
            AdministradorDatos.guardar(listaNueva);
            return listaNueva;
        })
    }
    
    static borrarPartido(partidoParaBorrar: Partido) {
        AdministradorDatos.setListaPartidos((listaPrevia) => {
            let indice = 0;

            for (const partidoIterado of listaPrevia) {
                if (partidoIterado === partidoParaBorrar) {
                    const listaNueva = listaPrevia.toSpliced(indice, 1);
                    AdministradorDatos.guardar(listaNueva);
                    return listaNueva;
                } else {
                    indice += 1;
                }
            }
            return listaPrevia;
        });
    }
    
    
  static guardar(listaParaGuardar: Array<Partido>) {
    localStorage.setItem(AdministradorDatos.nombreFlyer, JSON.stringify(listaParaGuardar));
  }
}