import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from './../cliente';;
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  
  inscricao: Subscription;
  cliente: Cliente;
  id: number;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.cliente = this.clienteService.consultaCliente(id);
      }
);
    

  
  }


}
