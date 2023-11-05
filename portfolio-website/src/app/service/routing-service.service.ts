import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
}
