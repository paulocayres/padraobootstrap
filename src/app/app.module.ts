//import { ClienteModule } from './cliente/cliente.module';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { ClienteComponent } from './cliente/cliente.component';

import { LoginService } from './login/login.service';
import { SairComponent } from './sair/sair.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    //ClienteComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterializeModule,
    AppRoutingModule,
    NgbModule
    //ClienteModule
  ],
  providers: [
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
