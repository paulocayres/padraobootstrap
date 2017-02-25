import { Usuario } from './usuario';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  label: string = '';
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.loginService.validaUsuario(this.usuario)){
      this.label = '';
      this.router.navigate(['']);
    } else {
      this.label = 'Usuário e/ou senha incorretos.';
      //console.log('login incorreto');
    }
  }

}
