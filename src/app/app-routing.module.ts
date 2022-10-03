import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes: Routes = [

  {//para el caso en que quiera que se cargue por defecto el home con la ruta 'home' y no '' hay que crear estas lineas para redirigir el path '' al path 'home'
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CharactersComponent
  },
  {
    path: 'details/:id',
    component: CharacterDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
