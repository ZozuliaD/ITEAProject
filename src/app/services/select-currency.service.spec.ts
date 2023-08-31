import { TestBed } from '@angular/core/testing';

import { SelectCurrencyTsService } from './select-currency.service';

describe('SelectCurrencyTsService', () => {
  let service: SelectCurrencyTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCurrencyTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
