import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient:HttpClient) { }

  login(data:object):Observable<any>{
    return this._HttpClient.post(`https://freeapi.gerasim.in/api/HotelBooking/Login` , data)
  }
}
