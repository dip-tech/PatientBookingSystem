import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorLogin } from './models/DoctorLogin';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  doDoctorLogin(doctorLogin:DoctorLogin){
    return this.http.post("http://localhost:8001/api/v1/doctor/authenticate",doctorLogin,{responseType:'text'})
  }

  doDoctorvalidateToken(token:String){
    return this.http.get("http://localhost:8001/api/v1/doctor/validate/"+token,{responseType:'text'});

  }
}
