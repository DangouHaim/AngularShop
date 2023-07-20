import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private appSettingsService: AppSettingsService) { }

  log(message: string) {
    this.appSettingsService.getSettings().pipe(take(1)).subscribe(x => {
      if(x.environment == 'dev') {
        console.log(message);
      }
    });
  }
}
