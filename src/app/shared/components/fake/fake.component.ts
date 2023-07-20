import { Component, Inject, Optional, Output } from '@angular/core';
import { Category } from 'src/app/products/enums/category.enum';
import { IProduct, Product } from 'src/app/products/models/product';
import { ConfigOptionsService } from '../../services/config-options.service';
import { IConfig } from '../../models/config';
import { APP_CONFIG, APP_CONFIG_TOKEN } from '../../services/constant.service';
import { GenerateFactory, GenerateFactoryToken, GeneratorService } from '../../services/generator.service';
import { LocalStorageService, LocalStorageServiceToken } from '../../services/local-storage.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.sass'],
  providers: [
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
    { provide: LocalStorageServiceToken, useValue: new LocalStorageService() },
    { provide: GenerateFactoryToken, useFactory: GenerateFactory(10), deps: [GeneratorService] }
  ]
})
export class FakeComponent {

  @Output()
  product: IProduct = new Product("Book", "Book description", 0, Category.Book, false);

  @Output()
  config!: IConfig;

  @Output()
  appConfig: any;

  @Output()
  generatedString: string;

  @Output()
  nextId!: number;

  @Output()
  localStorageData!: string | null;

  constructor(
    config: ConfigOptionsService,
    logService: LogService,
    @Optional() private generatorService: GeneratorService,
    @Optional() @Inject(LocalStorageServiceToken) localStorageService: LocalStorageService,
    @Optional() @Inject(APP_CONFIG_TOKEN) appConfig: any,
    @Optional() @Inject(GenerateFactoryToken) generatedString: string) {

      config?.setConfig({ id: "id", login: "login" });
      config?.setConfigProperty("email", "email@email.com");
      localStorageService?.saveData("data", "data from local storage");

      this.config = config?.getConfig();
      this.appConfig = appConfig;
      this.generatedString = generatedString;
      this.localStorageData = localStorageService?.getData("data");
      logService.log("Fake component is loaded");
  }

  onGeneratorClick() {
    this.nextId = this.generatorService.generateId();
  }
}
