import { Component } from '@angular/core';

import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get historial(){
    return this.gifsService.historial
  }
  constructor(private gifsService:GifsService){}

  buscar(item:string){
    
    if(item.trim().length===0){
      return;
    }

    console.log(item);
    
    this.gifsService.buscarGifs(item)
  }
}
