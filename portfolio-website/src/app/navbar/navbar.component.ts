import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'port-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
      
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }

  toAbout() {
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }
}
