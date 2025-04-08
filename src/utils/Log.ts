export default class Log {
    element: HTMLElement | null;

    constructor(element: HTMLElement | null) {
        this.element = element;
    }

    log(msg:String) {
        if (this.element) this.element.innerHTML += "\n" + msg;   
    }
}