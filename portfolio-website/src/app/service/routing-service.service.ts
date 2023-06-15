import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }

  toAbout() {
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }

  toSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior: "smooth"});
  }

  toEducation() {
    document.getElementById("education")?.scrollIntoView({behavior: "smooth"});
  }

  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
}
