import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  usuarioLogado: boolean;

  constructor(
    private loginService: LoginService,
  ){
  }

  ngOnInit(){
    //this.usuarioLogado = this.loginService.usuarioValidado();
    this.loginService.usuarioEvento.subscribe(
      evento => this.usuarioLogado = evento

    );

  }
  
}
