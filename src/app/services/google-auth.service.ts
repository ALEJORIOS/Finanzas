import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class GoogleAuthService {

  constructor(private readonly oAuthService: OAuthService, private httpClient: HttpClient) {
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

  postRecord(body: any) {
    return this.httpClient.post<any>('https://sheets.googleapis.com/v4/spreadsheets/1d3MI2JW91aPvY7NxaClMcquHRqa4_NhsbfJydmhJKjg/values/A1:append?valueInputOption=RAW&alt=json', body, {headers: this.authHeader()});
  }

  private authHeader(): HttpHeaders {
    return new HttpHeaders ({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }
}
