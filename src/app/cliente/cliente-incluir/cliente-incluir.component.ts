import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-incluir',
  templateUrl: './cliente-incluir.component.html',
  styleUrls: ['./cliente-incluir.component.css']
})
export class ClienteIncluirComponent implements OnInit {

  //cliente: Cliente = {id: null, nome: "", email:""};
  cliente: Cliente = <Cliente>{};
  

  constructor(
        private clienteService: ClienteService,
        private router: Router
  ) { }

  ngOnInit() {

  }

  incluirCliente(){
  
    //console.log(cliente:Cliente)  
    this.clienteService.incluirCliente(this.cliente);
    this.router.navigate(['/cliente']);

  }

}
