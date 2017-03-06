import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteRoutingModule } from './cliente.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { ClienteComponent }   from './cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteIncluirComponent } from './cliente-incluir/cliente-incluir.component';

import { ClienteService } from './cliente.service';


@NgModule({
    imports: [
        CommonModule,
        ClienteRoutingModule,
        FormsModule,
        NgbModule.forRoot()
        ],
    exports: [],
    declarations: [
        ClienteComponent,
        ClienteDetalheComponent,
        ClienteEditarComponent,
        ClienteIncluirComponent
    ],
    providers: [ClienteService],
})
export class ClienteModule { }
