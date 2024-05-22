import { Logo } from "./Logo";

export default function Titulo({ titulo }: { titulo: string }) {
  return (
    <div className="row align-items-center justify-content-center">
      <Logo />
      <h1 className="fs-2 col-6 text-center p-2 bg-primario text-white rounded">
        {titulo}
      </h1>
      <Logo />
    </div>
  );
}
