interface tryEle {
    createElement(tagName: any): Element;
}
interface tryEle {
    createElement(tagName: string): HTMLElement;
}
interface tryEle {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

let ele: tryEle;

ele = {
    createElement(tagName: "canvas"): HTMLCanvasElement {
        return ;
    }
}



interface eleTry {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: string): HTMLDivElement;
    createElement(tagName: any): Element;
}

let ele2: eleTry;
