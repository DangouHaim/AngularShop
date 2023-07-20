import { Injectable, Pipe } from '@angular/core';
import { AppSettings, IAppSettings } from '../models/app-settings';
import { LocalStorageService } from './local-storage.service';
import { Observable, catchError, retry, share, throwError, take, of, switchMap, filter } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private settings!: Observable<IAppSettings>;
  private appSettingsUrl = '../../assets/app-settings.json';

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
    ) {}

  setSettings(settings: Partial<IAppSettings>) {
    this.storage.saveData("appSettings", JSON.stringify(settings));
    this.settings = of(settings as IAppSettings);
    return this.settings;
  }

  getSettings() {
    return this.applySettingsFromLocalStorage();
  }

  private importSettingsFromString(settings: string) {
    this.settings = of(JSON.parse(settings) as IAppSettings)
    return this.settings;
  }

  private applyDefaultSettings() {
    return this.setSettings(new AppSettings());
  }

  private applySettingsFromLocalStorage() {
    let storageObject = this.storage.getData("appSettings");

    if (storageObject == null) {
      console.log("Local storage was clear, settings from app-settings.json will be applied");
      return this.applySettingsFromFile();
    } else {
      console.log("Settings from local storage will be applied");
      return this.importSettingsFromString(storageObject);
    }
  }

  private applySettingsFromFile() {
    this.settings = this.http.get<IAppSettings>(this.appSettingsUrl).pipe(
      filter(x => {
        if (x == undefined) {
          throw throwError(x);
        }

        return true;
      }),
      retry(2),
      share(),
      catchError(x => {
        console.log("Unable to load app-settings.json, default settings will be applied");
        return this.applyDefaultSettings();
      })
      );

      return this.settings;
    }
   
}