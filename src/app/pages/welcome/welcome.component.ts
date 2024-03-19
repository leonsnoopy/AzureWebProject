import { Component, OnInit } from '@angular/core';

import { HttpserviceService } from '../../service/httpservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string="";

  constructor(private httpService: HttpserviceService) {}

  ngOnInit() {
  }

  Send(){
    this.httpService.sendLineNotifyApi(this.message)
  }

}
