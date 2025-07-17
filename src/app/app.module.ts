import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    PedidosComponent,
    ClientesComponent,
    PrincipalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
