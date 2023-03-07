import { TestBed } from '@angular/core/testing';

import { PokemosService } from './pokemos.service';

describe('PokemosService', () => {
  let service: PokemosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
