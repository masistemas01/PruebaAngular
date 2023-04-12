import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {


  termino:string=''
  error:boolean=false;
  public paises:Pais[]=[];
  constructor(private paisService:PaisService){
    
  }

  buscar(termino:string){
    this.error=false
    this.termino=termino
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
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
  sugerencias(termino:string){ }
}
