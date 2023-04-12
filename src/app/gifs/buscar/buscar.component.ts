import { Component,ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  @ViewChild('txtTermino')txtTermino!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  buscar(){
    const valor = this.txtTermino.nativeElement.value;
    if(valor.trim().length===0){
      return;
    }

    console.log(valor);
    this.txtTermino.nativeElement.value=''
    this.gifsService.buscarGifs(valor)
  }
}
