interface Animal {
    name: string;
    eat(): void;
}

class Dog implements Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }

    eat(){
        console.log(`${this.name} 吃狗粮.`);
    }
}

class Cat implements Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }

    eat(){
        console.log(`${this.name} 吃猫粮.`);
    }
}

namespace Biology {
    export interface Animal {
        name: string;
        eat(): void;
    }

    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }

        eat(){
            console.log(`${this.name} 吃狗粮`);
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(theName: string){
            this.name = theName;
        }

        eat(){
            console.log(`${this.name} 吃猫粮`);
        }
    }
}

let dog: Biology.Animal;
dog = new Biology.Dog('狗狗');
dog.eat();

