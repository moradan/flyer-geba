export function Campo( {identifier, type, etiqueta}: {identifier: string, type: string, etiqueta: string} ) {
    return (
        <div>
            <label htmlFor={identifier}>{etiqueta}</label>
            <input id={identifier} type={type} className="form-control bg-transparent border-dark"/>
        </div>
    );
}
