import { InjectionToken } from '@angular/core';

export const APP_CONFIG_TOKEN = new InjectionToken<any>('app.config');
export const APP_CONFIG: any = { App: "TaskManager", Ver: "1.0", API_URL: "http://example.com" };