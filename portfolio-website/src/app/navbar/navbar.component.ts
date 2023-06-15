import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../service/routing-service.service';

@Component({
  selector: 'port-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public rs: RoutingService) {}

  ngOnInit(): void {
      
  }

}
