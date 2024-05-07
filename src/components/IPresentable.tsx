import { ReactNode } from "react";

export interface IPresentable {
    presentacion(): ReactNode;
}

export function presentar(presentable: IPresentable): ReactNode {
    return presentable.presentacion();
}
