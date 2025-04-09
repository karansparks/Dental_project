import { Component, inject, OnInit } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-appointment',
 standalone:true,
   imports:[ThemeModuleModule,ReactiveFormsModule  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder,private apiservice: AppointmentService) {
    this.userForm = this.fb.group({
      fullname: [''],
      email: [''],
      phone: [''],
      location: [''],
      insurance: [''],
      Treatment  : [''],
      preTreatment: [''],
      addTreatment: [''],
      message: [''],

    });
  }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.apiservice.addUser(this.userForm.value).subscribe({
        next: res => console.log('User saved', res),
        error: err => console.error('Error', err)
      });
    }
  }

  // Additional methods and properties can be added here

}



