// employee.model.ts
export class Employee {
    id?: number;
    name?: string;
    employeeID?: string;
    email?: string;
    gender?: string;
    department?: string;
}

export class OtpVerificationResponse {
    message?: string;
    employee?: Employee;
}
