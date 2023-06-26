import { Component, AfterViewInit, ElementRef, ViewChild, Output  } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Shop';
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;
  @Output()
  isAdmin: boolean = false;

  constructor(private userService: UserService) {
    this.isAdmin = userService.isAdmin();
  }
  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = "Shop title";
  }

  switchRole() {
    this.userService.switchRole();
    this.isAdmin = this.userService.isAdmin();
  }
}