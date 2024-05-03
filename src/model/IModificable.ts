interface IModificable<T> {
    agregar(partido: T): void;
    borrar(partido: T): void;
}
