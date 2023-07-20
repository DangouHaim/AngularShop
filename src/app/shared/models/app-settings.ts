export const DEV_ENV = "dev";
export const PROD_ENV = "prod";

export interface IAppSettings {
    environment: string;
}

export class AppSettings implements IAppSettings {
    constructor (
        public environment: string = DEV_ENV,
        ) { }
}