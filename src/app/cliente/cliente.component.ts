import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[]=[];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.clientes = this.clienteService.listaClientes();
  }

}
