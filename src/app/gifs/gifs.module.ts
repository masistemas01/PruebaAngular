import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { PrincipalComponent } from './principal/principal.component';
import { ImagenesComponent } from './imagenes/imagenes.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ImagenesComponent,
    PrincipalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PrincipalComponent,
    BuscarComponent,
    ImagenesComponent
  ]
})
export class GifsModule { }
