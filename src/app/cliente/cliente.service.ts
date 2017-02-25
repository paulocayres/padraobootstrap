import { Cliente } from './cliente';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

  clientes: Cliente[]=[
    {id: 1, nome: "Cliente01", email: "cliente01@email.com"},
    {id: 2, nome: "Cliente02", email: "cliente02@email.com"},
    {id: 3, nome: "Cliente03", email: "cliente03@email.com"}

  ];

  constructor() { }

  listaClientes(){
    return this.clientes;
  }

  consultaCliente(id: number){
    return this.clientes[id-1];
  }

}
