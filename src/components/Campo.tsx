export function Campo( {id, etiqueta}: {id: string, etiqueta: string} ) {
    return (
        <div>
            <label htmlFor={id}>{etiqueta}</label>
            <input id={id} className="form-control bg-transparent border-dark" />
        </div>
    );
}
