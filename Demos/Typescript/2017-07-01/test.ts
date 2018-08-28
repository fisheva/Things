interface clockConstructor {
    new (hour: number, minute: number): clockInterface;
}

interface clockInterface {
    trick(): any;
}

function createClock(ctor: clockConstructor, hour: number, minute: number): clockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements clockInterface {
    constructor(h: number, m: number){ }

    tick(){
        console.log("beep beep");
    }
}

class AnalogClock implements clockInterface {
    constructor(h: number, m: number) { }

    tick(){
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface box {
    width: number;
    height: number;
}

interface box {
    scale: number;
    height: number;
}

var square:box = {
    width: 100,
    height: 50,
    scale: 2
}