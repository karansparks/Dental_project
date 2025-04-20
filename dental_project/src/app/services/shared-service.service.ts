import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  messageFirst = new BehaviorSubject<any>(0);
  messageecond = new Subject();
  constructor() { }
}
