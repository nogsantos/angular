import { TestBed, inject } from '@angular/core/testing';

import { NomeTecService } from './nome-tec.service';

describe('NomeTecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomeTecService]
    });
  });

  it('should be created', inject([NomeTecService], (service: NomeTecService) => {
    expect(service).toBeTruthy();
  }));
});
