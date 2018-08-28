class Employee {
    fullName: string;
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if(employee.fullName){
    console.log(employee.fullName);
}



let passcode = "secret passcode";
class Employee2 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string){
        if (passcode && passcode === "secret passcode"){
            this._fullName = newName;
        }else{
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if(employee2.fullName){
    alert(employee2.fullName);
}

class Grid {
    static origin = { x:0, y:0 };
    calculate(point: {x: number, y: number}){
        let x = (point.x - Grid.origin.x);
        let y = (point.y - Grid.origin.y);

        return Math.sqrt(x * x + y * y)/this.scale;
    }

    constructor (public scale: number){ }
}

let gird1 = new Grid(1.0);
let gird2 = new Grid(5.0);