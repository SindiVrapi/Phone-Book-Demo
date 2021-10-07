import { TestBed } from '@angular/core/testing';

import { PbLibraryService } from './pb-library.service';

describe('PbLibraryService', () => {
  let service: PbLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
