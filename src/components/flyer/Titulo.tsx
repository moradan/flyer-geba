import { Logo } from "./Logo";

export default function Titulo({ titulo }: { titulo: string }) {
  return (
    <div className="row align-items-center justify-content-center">
      <h1 className="fs-2 col-6 text-center p-2 text-white text-shadow rounded">
        {titulo}
      </h1>
    </div>
  );
}
