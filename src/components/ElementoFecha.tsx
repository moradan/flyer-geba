import { SeccionLocalia } from "./SeccionLocalia";

export function ElementoFecha() {
  return (
    <div className="card border-dark p-2">
      <header>
        <h3 className="text-center">Primera Fecha</h3>
      </header>
      <SeccionLocalia value="Local" />
      <SeccionLocalia value="Visitante" />
    </div>
  );
}
