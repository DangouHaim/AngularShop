import { Injectable, InjectionToken } from '@angular/core';

export const GenerateFactoryToken = new InjectionToken<string>('generatedString');

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  private static current: number = 0;

  constructor() { }

  generateId() : number {
    return IdGeneratorService.current++;
  }

}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private IdGeneratorService: IdGeneratorService) { }

  generateId() : number {
    return this.IdGeneratorService.generateId();
  }

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
