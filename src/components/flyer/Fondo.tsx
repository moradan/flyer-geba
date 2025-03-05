import Image from 'react-bootstrap/Image'

export default function Fondo() {
  return (
    <>
      <Image
        src='/fondo-sin-escudo.jpg'
        alt='fondo azul liso'
        className='position-absolute z-n1 tamanio-fondo'
      />
    </>
  );
}
