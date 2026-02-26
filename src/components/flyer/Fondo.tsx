import Image from 'react-bootstrap/Image'

export default function Fondo() {
  return (
    <>
      <Image
        src='/fondo-febrero-2026.jpeg'
        alt='fondo azul con marca de agua de GEBA'
        className='position-absolute z-n1 tamanio-fondo'
      />
    </>
  );
}
