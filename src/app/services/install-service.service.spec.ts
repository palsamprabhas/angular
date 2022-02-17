import { TestBed } from '@angular/core/testing';

import { InstallServiceService } from './install-service.service';

describe('InstallServiceService', () => {
  let service: InstallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
