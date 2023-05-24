import { Injectable } from '@angular/core';
import { IConfig } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config!: IConfig;

  constructor() { }

  setConfig(config: Partial<IConfig>) {
    return this.config = config as IConfig;
  }

  getConfig() {
    return this.config;
  }

  setConfigProperty(key: keyof IConfig, value: any) {
    this.config[key] = value;
  }
}
