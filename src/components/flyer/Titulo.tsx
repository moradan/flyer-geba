import { Logo } from "./Logo";

export default function Titulo({ titulo, className }: { titulo: string, className: sting}) {
  return (
    <div className={`row align-items-center justify-content-center ${className ?? ""}`}>
      <h1 className="fs-2 col-6 text-center p-2 text-shadow rounded">
        {titulo}
      </h1>
    </div>
  );
}
