import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbPagination, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[]=[];
  id: number;

  pageSize: number = 10;
  collectionSize: number;
  maxSize: number;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientes = this.clienteService.listarClientes();
    this.clienteService.eventoCliente.subscribe(
      clientes => this.clientes = clientes,
      this.collectionSize = this.clientes.length,
      this.maxSize = this.clientes.length/10
      
    );
    }


  consultarCliente(id: number){
    this.clienteService.consultarCliente(id);
    this.router.navigate(['/cliente', id])
  }

  listarClienteId(){
    this.clientes = this.clienteService.listarClienteId(this.id);
  }

  listarCliente(){
    this.clientes = this.clienteService.listarClientes();
  }

}
