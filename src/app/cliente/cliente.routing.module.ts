import { AuthGuard } from './../guards/auth.guard';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteIncluirComponent } from './cliente-incluir/cliente-incluir.component';
import { ClienteComponent } from './cliente.component';






const clienteRoutes: Routes = [
    {path: '', component: ClienteComponent, children: [
        {path: 'novo', component: ClienteIncluirComponent },
        {path: ':id', component: ClienteDetalheComponent },
        {path: ':id/editar', component: ClienteEditarComponent }
    ]
}, 


];



@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]

})


export class ClienteRoutingModule{}