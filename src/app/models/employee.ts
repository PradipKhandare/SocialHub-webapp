// src/app/models/employee.model.ts

export class Employee {
    name: string;
    employeeID: string;
    email: string;
    gender: string;
    department: string;

    constructor(data?: Partial<Employee>) {
        this.name = data?.name || '';
        this.employeeID = data?.employeeID || '';
        this.email = data?.email || '';
        this.gender = data?.gender || '';
        this.department = data?.department || '';
    }
}
