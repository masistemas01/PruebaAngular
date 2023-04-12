import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import { TablaPaisComponent } from './componentes/tabla-pais/tabla-pais.component';


import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { FormsModule } from '@angular/forms';
import { VerpaisComponent } from './pages/ver-pais/ver-pais.component';
import { BuscarPaisComponent } from './componentes/buscar-pais/buscar-pais.component';



@NgModule({
  declarations: [
    TablaPaisComponent,
    BuscarPaisComponent, 

    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerpaisComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerpaisComponent
  ]
})
export class PaisesModule { }
