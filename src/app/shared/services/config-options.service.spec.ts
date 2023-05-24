/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigOptionsService } from './config-options.service';

describe('Service: ConfigOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigOptionsService]
    });
  });

  it('should ...', inject([ConfigOptionsService], (service: ConfigOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
