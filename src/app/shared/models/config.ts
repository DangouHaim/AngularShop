export interface IConfig {
    id: string;
    login: string;
    email: string;
}

export class Config implements IConfig {
    constructor (
        public id: string,
        public login: string,
        public email: string,
        ) { }
}