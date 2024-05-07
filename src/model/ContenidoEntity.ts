import { PartidoEntity } from "./PartidoEntity";

export class ContenidoEntity {
    clave = "";
    listaPartidos: PartidoEntity[] = [];

    constructor(clave: string) {
        console.log("Se creo un nuevo contenido")
        this.clave = clave;
    }

    agregarPartido() {
        const partido = this.leerFormulario();

        this.listaPartidos.push(partido);
        this.guardar();
    }

    quitarPartido() {
        this.listaPartidos.pop();
        this.guardar();
    }

    private guardar() {
        const listaPartidosJSON = JSON.stringify(this.listaPartidos);
        localStorage.setItem(this.clave, listaPartidosJSON);
    }

    private leerFormulario(): PartidoEntity {
        const campoFecha: HTMLInputElement | null = document.querySelector("#CampoFecha");
        const campoLocalia: HTMLInputElement | null = document.querySelector("#CampoLocalia");
        const campoHorario: HTMLInputElement | null = document.querySelector("#CampoHorario");
        const campoAdversario: HTMLInputElement | null = document.querySelector("#CampoAdversario");
        const CampoCategoria: HTMLInputElement | null = document.querySelector("#CampoCategoria");
      
        const partido = new PartidoEntity(
          campoFecha?.value ?? "",
          campoLocalia?.value ?? "",
          campoHorario?.value ?? "",
          campoAdversario?.value ?? "",
          CampoCategoria?.value ?? ""
        )

        return partido;
    }
}