import { TestBed, inject } from '@angular/core/testing';

import { BeaShellService } from './bea-shell.service';

describe('BeaShellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaShellService]
    });
  });

  it('should be created', inject([BeaShellService], (service: BeaShellService) => {
    expect(service).toBeTruthy();
  }));
});
