import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {
  heroes: string[] = ["spiderman", "thor", "hulk"," capitan america"]
  heroeBorrado : string =""
  
  borrarHeroe(){
    this.heroeBorrado=  this.heroes.shift() || '';
  }
  constructor() { }


  ngOnInit(): void {
  }

}
