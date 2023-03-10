import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PatientService } from './patient.service';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { FooterComponent } from './footer/footer.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PatientLoginComponent,
    FooterComponent,
    PatientSignupComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    DoctorLoginComponent,
    DoctorSignupComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
