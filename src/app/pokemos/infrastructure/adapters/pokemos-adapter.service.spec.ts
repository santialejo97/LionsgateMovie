import { TestBed } from '@angular/core/testing';

import { PokemosAdapterService } from './pokemos-adapter.service';

describe('PokemosAdapterService', () => {
  let service: PokemosAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemosAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
