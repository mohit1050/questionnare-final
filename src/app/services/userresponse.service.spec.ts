import { TestBed } from '@angular/core/testing';

import { UserresponseService } from './userresponse.service';

describe('UserresponseService', () => {
  let service: UserresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
