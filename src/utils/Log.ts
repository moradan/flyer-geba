export default class Log {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    log(msg:String) {
        this.element.innerHTML += "\n" + msg;   
    }
}