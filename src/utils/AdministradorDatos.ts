import Partido, { PartidoExcel, PartidoTexto } from "@/model/Partido";
import { Dispatch, SetStateAction } from "react";
import { ordenPorTimeStamp } from "./ordenDeFechaYTiempo";
import deepcopy from "deepcopy";

export default class AdministradorDatos {
    private static setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>; 
    private static listaPartidos: Array<Partido>;
    private static listaPartidosCruda: Array<Partido>;
    static nombreFlyer: string;
    
    private constructor() {}

    static inicializar(
        listaPartidos: Array<Partido>,
        setListaPartidos: Dispatch<SetStateAction<Array<Partido>>>,
    ) {
        AdministradorDatos.listaPartidos = listaPartidos;
        AdministradorDatos.setListaPartidos = setListaPartidos;
    }
    
    static cargarPartidos() {
        AdministradorDatos.nombreFlyer = localStorage.getItem("buffer") ?? "nuevo";
        const partidosAlmacenados: string = localStorage.getItem(AdministradorDatos.nombreFlyer) ?? "[]";
        const listaPartidosTexto: Array<PartidoTexto> = JSON.parse(partidosAlmacenados);
        const listaPartidosInicial: Array<Partido> = listaPartidosTexto.map(
          (partidoTexto) => new Partido(partidoTexto)
        );
        listaPartidosInicial.sort(ordenPorTimeStamp);
        AdministradorDatos.setListaPartidos(listaPartidosInicial);
        AdministradorDatos.listaPartidosCruda = listaPartidosInicial;
    }

    static cargarPartidosDeExcel(listaPartidosExcel: Array<PartidoExcel>) {
        const listaPartidosInicial: Array<Partido> = listaPartidosExcel.map(
            (partidoExcel) => partidoExcel.aPartido()
        )
        listaPartidosInicial.sort(ordenPorTimeStamp);
        AdministradorDatos.setListaPartidos(listaPartidosInicial)
        AdministradorDatos.listaPartidosCruda = listaPartidosInicial;
        AdministradorDatos.nombreFlyer = "Excel";
        localStorage.setItem("buffer", AdministradorDatos.nombreFlyer);
    }

    static agregar(partido: Partido) {
        const copiaListaPartidos: Array<Partido> = deepcopy(AdministradorDatos.listaPartidos);

        copiaListaPartidos.push(partido);
        copiaListaPartidos.sort(ordenPorTimeStamp);

        AdministradorDatos.guardar(copiaListaPartidos);
        AdministradorDatos.setListaPartidos(copiaListaPartidos);
        AdministradorDatos.listaPartidosCruda = copiaListaPartidos;
    }

    static borrarPartidoEnIndice(indice: number) {
        AdministradorDatos.setListaPartidos((listaPrevia) => {
            const listaNueva = listaPrevia.toSpliced(indice - 1, 1);
            AdministradorDatos.guardar(listaNueva);
            AdministradorDatos.listaPartidosCruda = listaNueva;
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
                    AdministradorDatos.listaPartidosCruda = listaNueva;
                    return listaNueva;
                } else {
                    indice += 1;
                }
            }
            return listaPrevia;
        });
    }
    
    
  static guardar(listaParaGuardar?: Array<Partido>) {
    if(!listaParaGuardar) {
        listaParaGuardar = AdministradorDatos.listaPartidosCruda;
    }

    localStorage.setItem(AdministradorDatos.nombreFlyer, JSON.stringify(listaParaGuardar));       
    localStorage.setItem("buffer", AdministradorDatos.nombreFlyer);
  }

  static filtrarPorFecha(desde: string, hasta: string) {
    const fechaDesde = new Date(desde);
    const fechaHasta = new Date(hasta);
    const predicado = (elemento: Partido, indice: Number, receptor: any) => {
        var posterior = false;
        var anterior = false;
        if(desde === '' || elemento.fecha >= fechaDesde) { 
            posterior = true; 
        }

        if(hasta === '' || elemento.fecha <= fechaHasta) { 
            anterior = true;
        }
        return (posterior && anterior);
    }    

    AdministradorDatos.setListaPartidos(AdministradorDatos.listaPartidosCruda.filter(predicado));
  }

}