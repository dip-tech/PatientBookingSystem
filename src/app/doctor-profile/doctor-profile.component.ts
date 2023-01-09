import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../models/Doctor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor=new Doctor();
  constructor(private dService:DoctorService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("current_user_type")=="DOCTOR"){
      let resp=this.dService.getDoctor(localStorage.getItem("user_email"));
      resp.subscribe(data=>{
        this.doctor=<Doctor>data;
        console.log(this.doctor);
      });
    }else{
      this.router.navigateByUrl("error-message/YOU ARE NOT LOGGED IN AS DOCTOR.")
    }
    
  }

}
