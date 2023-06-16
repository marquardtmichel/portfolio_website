import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../service/routing-service.service';

@Component({
  selector: 'port-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public rs: RoutingService) {}

  ngOnInit(): void {
      
  }

}
