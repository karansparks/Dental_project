import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ThankScreenComponent } from './thank-screen/thank-screen.component';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren ,OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-appointment',
 standalone:true,
   imports:[ThemeModuleModule,ReactiveFormsModule,ThankScreenComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
  providers: [MessageService]
})
export class AppointmentComponent implements OnInit,AfterViewInit {
  userForm: FormGroup;
  @ViewChild('animateSection', { static: true }) animateSection!: ElementRef;
  @ViewChildren('animateItem') animateItems!: QueryList<ElementRef>;
  constructor(private fb: FormBuilder,private apiservice: AppointmentService,private messageService: MessageService) {
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

  showBottomRight() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Data Saved Successfully', key: 'br', life: 3000 });
}
  ngOnInit(): void {
    // Initialization logic can go here
  }


  viewThankYou:boolean = false;
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.apiservice.addUser(this.userForm.value).subscribe({
        next: res => {
          console.log('User saved', res)
          this.viewThankYou = true;
          this.showBottomRight();
          this.userForm.reset(); // Reset the form after successful submission
        } ,
        error: err => console.error('Error', err)
      });
    }
  }

  messageFromChild = "";

  receiveFromChild(message: string) {
    this.messageFromChild = message;
    if(message === 'home') {
      this.viewThankYou = false; // Hide the thank you screen when navigating back to home
    }
  }

  // Additional methods and properties can be added here
  ngAfterViewInit() {
  
  }
}



