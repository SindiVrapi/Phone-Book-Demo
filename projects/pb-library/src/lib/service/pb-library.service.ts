import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PbLibraryService {

  url = 'http://localhost:3000';
  public headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get( this.url + '/users');
  }

  getCurrentUser(userid:any): Observable<any> {
    return this.http.get( this.url + '/users/' + userid);
  }

  removeCurrentUser(userid:any): Observable<any> {
    return this.http.delete( this.url + '/users/' + userid);
  }

  saveEditedUser(userid:any, contact:any): Observable<any> {
    return this.http.put( this.url + '/users/' + userid, contact, {headers: this.headers});
  }

  saveAddedUser(contact:any): Observable<any> {
    return this.http.post( this.url + '/users/', contact, {headers: this.headers});
  }

  getNrTypes(): Observable<any> {
    return this.http.get( this.url + '/nrTypes');
  }

  removePhoneNumberForUser(userid:any, contact:any): Observable<any> {
    return this.http.put( this.url + '/users/' + userid, contact, {headers: this.headers});
  }
}
