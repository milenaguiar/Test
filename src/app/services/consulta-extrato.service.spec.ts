import { TestBed } from '@angular/core/testing';

import { ConsultaExtratoService } from './consulta-extrato.service';

describe('ConsultaExtratoService', () => {
  let service: ConsultaExtratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaExtratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
