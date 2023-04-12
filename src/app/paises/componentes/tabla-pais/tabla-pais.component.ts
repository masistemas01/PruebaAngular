import { Component ,Input} from '@angular/core';
import { Pais } from '../../interfaces/pais-interfaces';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent {
  @Input() paises:Pais[]=[];

  constructor(){}

}
