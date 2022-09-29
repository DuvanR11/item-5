import { DetalleMarvelComponent } from './components/detalle-marvel/detalle-marvel.component';
import { ComicsMarvelComponent } from './pages/comics-marvel/comics-marvel.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './pages/comics/comics.component';

const routes: Routes = [
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'rick', component: ComicsComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'marvel', component: ComicsMarvelComponent },
  { path: 'perfilmarvel/:id', component: DetalleMarvelComponent},
  { path: 'perfil/:id', component: PerfilComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
