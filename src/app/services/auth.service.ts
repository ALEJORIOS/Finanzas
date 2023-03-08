import { Injectable } from '@angular/core';
import { from } from 'rxjs';

const config: any = {
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

  constructor() {

  }

  auth() {
    gapi
    // gapi.client.init({
    //   'clientId': config.clientId,
    //   'scope': 'https://www.googleapis.com/auth/spreadsheets',
    //   'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    // }).then(function() {
    //   if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
    //     console.log('Hola mundo')
    //     gapi.auth2.getAuthInstance().signIn();
    // }
    //   // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    //   // updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    // });
  }

  postRecord(body: any) {
    return from('holis')
  }
}
