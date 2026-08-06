export default function Titulo({ titulo, subtitulo, className }: { titulo: string, subtitulo: string, className: sting}) {
  return (
    <div className={`d-flex justify-content-center p-3 ${className ?? ""}`}>
			<img
				src="/escudo.png"
				height="80"
			/>
				<div>
				<h1 className="fs-2 text-shadow">
					{titulo}
				</h1>
				<h2 className="fs-5 text-shadow">
					{subtitulo}
				</h2>
			</div>
			<img
				src="/aat.jpeg"
				style={{ width:"auto", height:80 }}
				/>
    </div>
  );
}
