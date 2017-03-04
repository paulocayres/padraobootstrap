import { Router } from '@angular/router';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[]=[];
  id: number;

  number

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientes = this.clienteService.listarClientes();
  }


  consultarCliente(id: number){
    this.clienteService.consultarCliente(id);
    this.router.navigate(['/cliente', id])
  }

  listarClienteId(){
    this.clientes = this.clienteService.listarClienteId(this.id);
  }

}
