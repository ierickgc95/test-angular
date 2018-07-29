import {Component} from '@angular/core';

@Component({
   selector:'fruta',
   template:`<h2> {{nombre_component}} </h2>
    <p>{{listado_frutas}}</p>`

})

export class FrutaComponent{
  public nombre_component:string = 'Componente de fruta';
  public listado_frutas:string = 'Naranja, Manzana, Pera y Sandia';
}
