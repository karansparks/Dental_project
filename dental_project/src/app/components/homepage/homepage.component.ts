import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-homepage',
  standalone:false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit,OnInit{
  @ViewChild('box') box!: ElementRef;
  currentItem = 'Book';

  ngOnInit(): void {
    // window.location.reload();
  }
  ngAfterViewInit() {
    
  }
}
