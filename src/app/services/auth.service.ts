import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '252898797849-ba258ral4rvm9pk3i573ohm6annhlir3.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if(!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log('User: ', userProfile);
          })
        }
      })
    })
  }
}
