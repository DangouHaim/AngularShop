import { Component, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Shop';
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerText = "Shop title";
  }
}