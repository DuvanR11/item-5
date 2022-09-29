import { InterceptorService } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CardComponent } from './components/card/card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulos Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CardMarvelComponent } from './components/card-marvel/card-marvel.component';
import { ComicsMarvelComponent } from './pages/comics-marvel/comics-marvel.component';
import { PerfilMarvelComponent } from './pages/perfil-marvel/perfil-marvel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContentMarvelComponent } from './components/content-marvel/content-marvel.component';
import { DetalleMarvelComponent } from './components/detalle-marvel/detalle-marvel.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    CardComponent,
    ContentCardComponent,
    HeaderComponent,
    PerfilComponent,
    DetalleComponent,
    CardMarvelComponent,
    ComicsMarvelComponent,
    PerfilMarvelComponent,
    NotFoundComponent,
    InicioComponent,
    ContentMarvelComponent,
    DetalleMarvelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
