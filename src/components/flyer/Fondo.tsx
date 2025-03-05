import Image from 'react-bootstrap/Image'

export default function Fondo() {
  return (
    <>
      <Image
        src='/fondo-geba.jpeg'
        alt='fondo liso'
        className='position-absolute z-n1 tamanio-fondo'
      />
    </>
  );
}
