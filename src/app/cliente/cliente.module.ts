import { ClienteRoutingModule } from './cliente.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteComponent }   from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

import { ClienteService } from './cliente.service';


@NgModule({
    imports: [CommonModule, ClienteRoutingModule],
    exports: [],
    declarations: [ClienteComponent, ClienteDetalheComponent, ClienteFormComponent],
    providers: [ClienteService],
})
export class ClienteModule { }
