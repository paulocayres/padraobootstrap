import { ClienteModule } from './cliente/cliente.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SairComponent } from './sair/sair.component';
//import { ClienteComponent } from './cliente/cliente.component';




const appRoutes: Routes = [

    {path: '',
     component: HomeComponent,
     canActivate: [AuthGuard] 
    },
    {path: 'login',
     component: LoginComponent
     //canActivate: [AuthGuard] 
    },
    {path: 'sair',
     component: SairComponent,
     canActivate: [AuthGuard] 
    },
    /*{path: 'cliente',
     component: ClienteComponent,
     canActivate: [AuthGuard] 
    }*/
    {path: 'cliente',
    loadChildren: 'app/cliente/cliente.module#ClienteModule',
    canActivate: [AuthGuard] 
    },





]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
