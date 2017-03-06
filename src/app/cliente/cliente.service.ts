import { element } from 'protractor';
import { Cliente } from './cliente';
import { Injectable, ModuleWithProviders, EventEmitter } from '@angular/core';

@Injectable()
export class ClienteService {
  //i: number;
  clientes: Cliente[]=[
    {id: 1, nome: "Cliente01", email: "cliente01@email.com"},
    {id: 2, nome: "Cliente02", email: "cliente02@email.com"},
    {id: 3, nome: "Cliente03", email: "cliente03@email.com"},
    {id: 4, nome: "Cliente04", email: "cliente04@email.com"},
    {id: 5, nome: "Cliente05", email: "cliente05@email.com"},
    {id: 6, nome: "Cliente06", email: "cliente06@email.com"},
    {id: 7, nome: "Cliente07", email: "cliente07@email.com"},
    {id: 8, nome: "Cliente08", email: "cliente08@email.com"},
    {id: 9, nome: "Cliente09", email: "cliente09@email.com"},
    {id: 10, nome: "Cliente10", email: "cliente10@email.com"},
    {id: 11, nome: "Cliente11", email: "cliente11@email.com"},
    {id: 12, nome: "Cliente12", email: "cliente12@email.com"},
    {id: 13, nome: "Cliente13", email: "cliente13@email.com"},
    {id: 14, nome: "Cliente14", email: "cliente14@email.com"},
    {id: 15, nome: "Cliente15", email: "cliente15@email.com"},
    {id: 16, nome: "Cliente16", email: "cliente16@email.com"},
    {id: 17, nome: "Cliente17", email: "cliente17@email.com"},
    {id: 18, nome: "Cliente18", email: "cliente18@email.com"},
    {id: 19, nome: "Cliente19", email: "cliente19@email.com"},
    {id: 20, nome: "Cliente20", email: "cliente20@email.com"},
    {id: 21, nome: "Cliente21", email: "cliente21@email.com"},
    {id: 1, nome: "Cliente01", email: "cliente01@email.com"},
    {id: 2, nome: "Cliente02", email: "cliente02@email.com"},
    {id: 3, nome: "Cliente03", email: "cliente03@email.com"},
    {id: 4, nome: "Cliente04", email: "cliente04@email.com"},
    {id: 5, nome: "Cliente05", email: "cliente05@email.com"},
    {id: 6, nome: "Cliente06", email: "cliente06@email.com"},
    {id: 7, nome: "Cliente07", email: "cliente07@email.com"},
    {id: 8, nome: "Cliente08", email: "cliente08@email.com"},
    {id: 9, nome: "Cliente09", email: "cliente09@email.com"},
    {id: 10, nome: "Cliente10", email: "cliente10@email.com"},
    {id: 11, nome: "Cliente11", email: "cliente11@email.com"},
    {id: 12, nome: "Cliente12", email: "cliente12@email.com"},
    {id: 13, nome: "Cliente13", email: "cliente13@email.com"},
    {id: 14, nome: "Cliente14", email: "cliente14@email.com"},
    {id: 15, nome: "Cliente15", email: "cliente15@email.com"},
    {id: 16, nome: "Cliente16", email: "cliente16@email.com"},
    {id: 17, nome: "Cliente17", email: "cliente17@email.com"},
    {id: 18, nome: "Cliente18", email: "cliente18@email.com"},
    {id: 19, nome: "Cliente19", email: "cliente19@email.com"},
    {id: 20, nome: "Cliente20", email: "cliente20@email.com"},
    {id: 21, nome: "Cliente21", email: "cliente21@email.com"},
];

  clientesId: Cliente[] = [];

  eventoCliente = new EventEmitter<Cliente[]>();


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
    this.eventoCliente.emit(this.clientes);
  }



  alterarCliente(cliente: Cliente, indice: number){

    if (cliente.id == undefined || cliente.nome == "" || cliente.email == ""){
      console.log("Campos do Cliente não definidos.")
    } else {
      this.clientes[indice].id = cliente.id;
      this.clientes[indice].nome = cliente.nome;
      this.clientes[indice].email = cliente.email;
      this.eventoCliente.emit(this.clientes);
      console.log(this.listarClientes());
    }

    
  }

  incluirCliente(cliente: Cliente){

    if (cliente.id == undefined || cliente.nome == undefined || cliente.email == undefined){
      console.log("Cliente Não definido")
    } else {
          this.clientes.push(cliente);
          this.eventoCliente.emit(this.clientes);
    }

    
  }


}
