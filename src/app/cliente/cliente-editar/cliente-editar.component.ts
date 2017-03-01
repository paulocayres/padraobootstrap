import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit, OnDestroy {

  cliente: any;
  inscricao: Subscription;
  indice: number;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
      this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.cliente = this.clienteService.consultaCliente(id);

        if (this.cliente === null){
          this.cliente = {};
        }
      });

      this.indice = this.clienteService.clientes.indexOf(this.cliente);

  }

  salvarCliente(cliente: Cliente){
    this.clienteService.alteraCliente(cliente,this.indice);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
