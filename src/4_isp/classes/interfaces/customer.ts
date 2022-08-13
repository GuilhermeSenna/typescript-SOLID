import { CustomerProtocol } from './customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }
}

export class EnterpriseCustomer implements CustomerProtocol {}
