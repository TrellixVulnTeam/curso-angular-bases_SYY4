import { Component } from "@angular/core";



@Component({
    selector: "app-contador",
    templateUrl:"contador.component.html"
})
export class  ContadorComponent{
    titulo:string = "contador"
    numero: number = 0
    sumar = () =>{
      this.numero += 1
    }
    restar = () =>{
      this.numero -= 1
    }
}