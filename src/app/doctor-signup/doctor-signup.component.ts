import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/Doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { AppointmentSchedule } from '../models/AppointmentSchedule';
@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  doctor: Doctor = new Doctor();
  appointmentSchedule: AppointmentSchedule = new AppointmentSchedule();
  confrimPassword: String;
  constructor(private dservice: DoctorService, private router: Router) { }

  ngOnInit(): void {
  }

  submitDetails(): void {
    if (this.confrimPassword == this.doctor.dl.password) {
      this.doctor.as[0] = this.appointmentSchedule;
      let resp = this.dservice.doAddDoctor(this.doctor);
      resp.subscribe(data => {
        if (data == "REGISTRATION SUCCESSFULL") {
          this.router.navigateByUrl("success-message/" + data);
        }
        else{
          this.router.navigateByUrl("error-message/"+data);
        }
      });
    }
    else{
      alert("Confrim Password Not Matched.");
    }

  }

}
