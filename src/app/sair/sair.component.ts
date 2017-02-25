import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login/login.service';


@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sair();
    this.router.navigate(['/login']);
  }

  sair(){
    this.loginService.sair();
  }

}
