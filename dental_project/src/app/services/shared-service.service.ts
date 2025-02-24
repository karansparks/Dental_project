import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  messageFirst = new Subject<any>();
  messageecond = new Subject();
  constructor() { }
}
