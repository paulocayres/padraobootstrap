import { element } from 'protractor';
import { Cliente } from './cliente';
import { Injectable, ModuleWithProviders } from '@angular/core';

@Injectable()
export class ClienteService {
  //i: number;
  clientes: Cliente[]=[
    {id: 1, nome: "Cliente01", email: "cliente01@email.com"},
    {id: 2, nome: "Cliente02", email: "cliente02@email.com"},
    {id: 3, nome: "Cliente03", email: "cliente03@email.com"}

  ];

  clientesId: Cliente[] = [];


  constructor() { }

  listarClientes(){
    return this.clientes;
  }



    listarClienteId(id: number){
    
    this.clientesId = [];
  
    for (var index = 0; index <= this.clientes.length -1 ; index++) {
      if (this.clientes[index].id.toLocaleString().search(id.toLocaleString()) != -1){
        this.clientesId.push(this.clientes[index]);
      }
    }

    return this.clientesId;
  }

  consultarCliente(id: number){
    
  //return this.clientes[id-1];
    for (var index = 0; index <= this.clientes.length; index++) {
      if(this.clientes[index].id == id){
        //console.log(this.clientes[index]);
        return this.clientes[index];
      }
    }
  }



  excluirCliente(cliente: Cliente){
    let indice = this.clientes.indexOf(cliente);
    this.clientes.splice(indice,1);
  }



  alterarCliente(cliente: Cliente, indice: number){

    if (cliente.id == undefined || cliente.nome == "" || cliente.email == ""){
      console.log("Campos do Cliente não definidos.")
    } else {
      this.clientes[indice].id = cliente.id;
      this.clientes[indice].nome = cliente.nome;
      this.clientes[indice].email = cliente.email;

      console.log(this.listarClientes());
    }

    
  }

  incluirCliente(cliente: Cliente){

    if (cliente.id == undefined || cliente.nome == undefined || cliente.email == undefined){
      console.log("Cliente Não definido")
    } else {
          this.clientes.push(cliente);
          this.clientesId.push(cliente);
    }

    
  }


}
