import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private key: string = "isAdmin";

  constructor(private storage: LocalStorageService) { }

  switchRole() {
    this.isAdmin()
      ? this.storage.saveData("isAdmin", "")
      : this.storage.saveData("isAdmin", "true");
  }

  isAdmin() {
    return this.storage.getData(this.key) == "true";
  }

}
