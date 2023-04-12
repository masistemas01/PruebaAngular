import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerpaisComponent } from './paises/pages/ver-pais/ver-pais.component';
import { PrincipalComponent } from './gifs/principal/principal.component';

const routes: Routes=[
  {
      path:'',
      component:PorPaisComponent,
      pathMatch:'full'
  },
  {
      path: 'region',
      component:PorRegionComponent,
      pathMatch:'full'
  },
  {
      path: 'capital',
      component:PorCapitalComponent,
      pathMatch:'full'
  },
  {
      path: 'pais/:id',
      component:VerpaisComponent,
      pathMatch:'full'
  },
  {
    path: 'gifs',
    component:PrincipalComponent,
    pathMatch:'full'
},
  {
      path:'**',
      redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
