import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxModule } from './modulo/ngx/ngx.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EdicionComponent } from './componentes/dashboard/comps/edicion/edicion.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { FooterComponent } from './componentes/footer/footer.component';
import { ListaEdicionComponent } from './componentes/dashboard/comps/lista-edicion/lista-edicion.component';
import { ListaEstrenosComponent } from './componentes/dashboard/comps/lista-estrenos/lista-estrenos.component';
import { ListaMaspedidasComponent } from './componentes/dashboard/comps/lista-maspedidas/lista-maspedidas.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { RegisterComponent } from './componentes/access/register/register.component';
import { AccessComponent } from './componentes/access/access.component';
import { LoginComponent } from './componentes/access/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ListadoComponent,
    DetalleComponent,
    ContactoComponent,
    EdicionComponent,
    DashboardComponent,
    FooterComponent,
    ListaEdicionComponent,
    ListaEstrenosComponent,
    ListaMaspedidasComponent,
    NotificacionComponent,
    RegisterComponent,
    AccessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
