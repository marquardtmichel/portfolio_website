import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';
declare let AOS: any;

@Component({
  selector: 'port-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   person: Person = {
    name: 'Michel Marquardt',
    age: 26,
    country: 'Germany',
    email: 'marquardt_michel@web.de'
  }

  constructor() {
    console.log(AOS)
  }

  ngOnInit(): void {
      AOS.init()
      AOS.refresh();
  }
}
