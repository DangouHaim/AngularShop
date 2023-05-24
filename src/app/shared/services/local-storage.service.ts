import { Injectable, InjectionToken } from '@angular/core';

export const LocalStorageServiceToken = new InjectionToken<LocalStorageService>('LocalStorageService');

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

}
