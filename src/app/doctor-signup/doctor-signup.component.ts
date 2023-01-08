import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/Doctor';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  doctor:Doctor=new Doctor();
  confrimPassword:String;
  constructor() { }

  ngOnInit(): void {
  }

  submitDetails():void{
    console.log(this.doctor);
  }

}
