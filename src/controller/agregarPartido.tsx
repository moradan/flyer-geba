import { PartidoEntity } from "@/model/PartidoEntity"

export function agregarPartido() {
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

  const partidoJSON = JSON.stringify(partido);
  const clave = "partidos";

  localStorage.setItem(clave, partidoJSON);
}
