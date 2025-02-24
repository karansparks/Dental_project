import { Component, OnInit , signal , inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-serv-ces',
  standalone:true,
  imports:[HeaderComponent,ThemeModuleModule],
  templateUrl: './serv-ces.component.html',
  styleUrl: './serv-ces.component.scss'
})
export class ServCesComponent implements OnInit {
 servicesData = inject(SharedServiceService);

  constructor() {}
  serviceDatas= signal<any[]>([{
    id:1,
    title : 'Braces',
    imgUrl:'./doctor.jpeg',
    description : ['Braces definition','draces description']
  ,
},{
  id:2,
  title : 'Dentures',
  imgUrl:'./doctor.jpeg',
  description : ['Dentures definition','Dentures description']
}]);
  trimData = signal<number>(0);
  loopData = signal<any[]>([]);

  message: number = 0;
  ngOnInit() {
    let serviceValue:any,originalData:any = [];
    this.servicesData.messageFirst.subscribe({
      next: (v:any) =>{
        this.message = v;
        console.log(`observerA: ${v}`)
        originalData = [];
        console.log(this.serviceDatas().find((data:any) => data.id === v))
        originalData.push(this.serviceDatas().find((data:any) => data.id === v));
        console.log("originalData",originalData);

        this.loopData.set(originalData)
        console.log("loopData",this.loopData());
        // this.trimData.set(v);

      } 
    });
    console.log("loopData",this.loopData());

    console.log("serviceValue",this.serviceDatas());
    console.log("message",this.message);


    
  }


}
