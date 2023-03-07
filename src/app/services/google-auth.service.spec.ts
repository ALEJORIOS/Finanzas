import { TestBed } from '@angular/core/testing';
import { OAuthModule } from 'angular-oauth2-oidc';

import { GoogleAuthService } from './google-auth.service';

describe('GoogleAuthService', () => {
  let service: GoogleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [OAuthModule.forRoot()]});
    service = TestBed.inject(GoogleAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
