import { Dispatch, SetStateAction } from "react";

export function Campo( 
    {identifier, type, etiqueta, valor, actualizador}: 
    {identifier: string, type: string, etiqueta: string, valor: string, actualizador: Dispatch<SetStateAction<string>>} 
) {
    return (
        <div>
            <label htmlFor={identifier}>{etiqueta}</label>
            <input 
                id={identifier} 
                type={type} 
                className="form-control bg-transparent border-dark"
                value={valor}
                onChange={(e) => actualizador(e.target.value)}
                required/>
        </div>
    );
}
