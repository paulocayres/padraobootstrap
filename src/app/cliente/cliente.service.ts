import { element } from 'protractor';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {
  i: number;
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
    
  //return this.clientes[id-1];
    for (var index = 0; index <= this.clientes.length; index++) {
      if(this.clientes[index].id == id){
        //console.log(this.clientes[index]);
        return this.clientes[index];
      }
    }
  }



  excluiCliente(cliente: Cliente){
    let indice = this.clientes.indexOf(cliente);
    this.clientes.splice(indice,1);
  }



  alteraCliente(cliente: Cliente, indice: number){

    this.clientes[indice].id = cliente.id;
    this.clientes[indice].nome = cliente.nome;
    this.clientes[indice].email = cliente.email;
    
  }

  incluirCliente(cliente: Cliente){

    if (cliente.id == undefined || cliente.nome == undefined || cliente.email == undefined){
      console.log("Cliente Não definido")
    } else {
          this.clientes.push(cliente);
    }

    
  }


}
