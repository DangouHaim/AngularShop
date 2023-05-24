import { Injectable, InjectionToken } from '@angular/core';

export const GenerateFactoryToken = new InjectionToken<string>('generatedString');

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generate(n: number) : string {
    return Date
      .now()
      .toString(36)
      .substring(0, n);
  }

}

export function GenerateFactory(n: number): (generateService: GeneratorService) => string {
  return (generateService: GeneratorService): string =>
  generateService.generate(n);
}
