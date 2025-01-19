import { TestBed } from '@angular/core/testing';

import { LangCustomServiceService } from './lang-custom-service.service';

describe('LangCustomServiceService', () => {
  let service: LangCustomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangCustomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
