import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroes/heroe.component';
import { ListadoHeroesComponent } from './listadoHeroes/listado-heroes.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoHeroesComponent
  ],
  exports:[
    HeroeComponent,
    ListadoHeroesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
