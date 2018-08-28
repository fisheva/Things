abstract class Animal {
    abstract makeSound(): void;
    move(): void{
        console.log('roaming the earch...');
    }
}

abstract class Department {
    constructor(public name: string) {

    }
    printName(): void{
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; //必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }

    printMeeting(): void{
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department;

department = new Department();

department = new AccountingDepartment();

department.printName();
department.printMeeting();
department.generateReports();