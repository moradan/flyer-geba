export function Campo( {id, type, etiqueta}: {id: string, type: string, etiqueta: string} ) {
    return (
        <div>
            <label htmlFor={id}>{etiqueta}</label>
            <input id={id} type={type} className="form-control bg-transparent border-dark" />
        </div>
    );
}
