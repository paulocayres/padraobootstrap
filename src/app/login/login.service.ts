import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoginService {

  usuario: Usuario = {nome: "p", senha: "p"};
  usuarioLogado: boolean = false;
  usuarioEvento= new EventEmitter<boolean>();

  constructor() { }

  validaUsuario(usuario: Usuario){
    if (usuario.nome === this.usuario.nome && usuario.senha === this.usuario.senha){
      this.usuarioLogado = true;
      this.usuarioEvento.emit(true);
      //console.log('logou');
      return true;

    } else {
      this.usuarioLogado = false;
      this.usuarioEvento.emit(false);
      return false;
    }
  }

  sair(){
      this.usuarioLogado = false;
      this.usuarioEvento.emit(false);
  }

  usuarioValidado(){
    return this.usuarioLogado;
  }

}
