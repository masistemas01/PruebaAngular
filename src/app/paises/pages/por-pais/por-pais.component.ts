import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais-interfaces';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino:string=''
 error:boolean=false;
 public  paises  :Pais[]=[];
 paisessugeridos  :Pais[]=[];
 mostrarSugerencias:boolean=false


  constructor(private paisService:PaisService){
   
  }

  buscar(termino:string){
    this.mostrarSugerencias=false;
    this.error=false
    this.termino=termino
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe(resp=>
      {
        
        this.paises=resp;
        console.log(this.paises);
      },(err)=>{
        console.log(err);
        this.error=true
      }
      
      )
  }
  sugerencias(termino:string){ 
    this.mostrarSugerencias=true;
    this.error=false;
    this.termino=termino
    this.paisService.buscarPais(termino)
    .subscribe(
      
      paises=>this.paisessugeridos=paises.splice(0,5),
      (err)=>{this.paisessugeridos=[]}
      )
  }
  buscarSugerido(termino:string){
    this.buscar(termino)
  }
}
