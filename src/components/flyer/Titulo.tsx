import { Logo } from "./Logo";

export default function Titulo({ titulo }: { titulo: string }) {
  return (
    <div className="row align-items-center justify-content-center">
      <Logo />
      <h1 className="col-6 text-center bg-primary text-white rounded">
        {titulo}
      </h1>
      <Logo />
    </div>
  );
}
