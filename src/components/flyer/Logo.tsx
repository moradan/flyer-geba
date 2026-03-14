import Image from 'next/image';

export function Logo() {
  return (
    <div className="col-2">
      <Image
        src="/escudo.png"
        alt="Escudo de Gimnasia y Esgrima de Buenos Aires"
        className="img-fluid"
      />
    </div>
  );
}
