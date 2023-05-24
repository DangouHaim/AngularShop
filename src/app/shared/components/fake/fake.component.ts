import { Component, Inject, Output } from '@angular/core';
import { Category } from 'src/app/products/enums/category.enum';
import { IProduct, Product } from 'src/app/products/models/product';
import { ConfigOptionsService } from '../../services/config-options.service';
import { IConfig } from '../../models/config';
import { APP_CONFIG, APP_CONFIG_TOKEN } from '../../services/constant.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.sass'],
  providers: [{ provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG }]
})
export class FakeComponent {

  @Output()
  product: IProduct = new Product("Book", "Book description", 0, Category.Book, false);

  @Output()
  config!: IConfig;

  @Output()
  appConfig: any;

  constructor(config: ConfigOptionsService, @Inject(APP_CONFIG_TOKEN) appConfig: any) {
    config.setConfig({ id: "id", login: "login" });
    config.setConfigProperty("email", "email@email.com");
    this.config = config.getConfig();

    this.appConfig = appConfig;
  }
}
