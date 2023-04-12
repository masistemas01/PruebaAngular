import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { DataGif, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private apiKey:string="FXrCpEF663Fvnyh48zZw0kVaNF3SLngv";
private url:string="http://api.giphy.com/v1/gifs";
private _historial:string[]=[];
public resultados:Gif[]=[];

get historial(){
  
  return [...this._historial];
}


// async buscarGifs(query:string){
  
//   query=query.trim().toLocaleLowerCase();

//   if(!this._historial.includes(query))
//   {
//     this._historial.unshift(query);
//   }
//   //Controlar la cantidad de busquedas con slice
// this._historial=this._historial.slice(0,10);

// const resp = await fetch('https://api.giphy.com/v1/gifs/search?apikey=FXrCpEF663Fvnyh48zZw0kVaNF3SLngv&q=oso&limit=10');
// const data = await resp.json(); 
// console.log(data);
// }



constructor(private http:HttpClient){
  this.resultados=JSON.parse(localStorage.getItem('resultado')!) || [];
  
  if(localStorage.getItem('historial')?.length){
    this._historial=JSON.parse(localStorage.getItem('historial')!) ||'';
  }

}
buscarGifs(query:string){
  
 query=query.trim().toLocaleLowerCase();
  
 if(!this._historial.includes(query))
  {
    this._historial.unshift(query);
    this._historial=this._historial.slice(0,10);
    localStorage.setItem('historial',JSON.stringify(this._historial));
  }

const params = new HttpParams()
                    .set('apikey',this.apiKey)
                    .set('q',query)
                    .set('limit','10');
console.log(params);

  this.http.get<DataGif>(`${this.url}/search`,{params})
  .subscribe((resp) => {
    // console.log(resp.data);
    this.resultados=resp.data;    
    localStorage.setItem('resultado',JSON.stringify(this.resultados));
    })
  //Controlar

}
}
