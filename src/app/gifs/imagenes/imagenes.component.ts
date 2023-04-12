import { Component } from '@angular/core';

import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {
  constructor(private gifsService:GifsService){
  }
get resultados()
{
  return this.gifsService.resultados;
}    

}
