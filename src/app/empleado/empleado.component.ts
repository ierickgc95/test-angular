import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls:['./empleado.component.css']
})

export class EmpleadoComponent {
  public title: string = 'Empleados de la APP';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public visible: boolean;
  public color: string;
  public color_seleccionado:string;
  constructor() {
    this.empleado = new Empleado('Ian Erick', 23, 'Ing. Sistemas', true,'red');
    this.trabajadores = [
      new Empleado('Ian Erick2', 24, 'Ing. Sistemas', true,'blue'),
      new Empleado('Ian Erick3', 25, 'Ing. Sistemas', false,'green'),
      new Empleado('Ian Erick4', 26, 'Ing. Sistemas', true,'skyblue')
    ];
    this.visible = true;
    this.color = 'red';
    this.color_seleccionado='#ccc';
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarVisble(valor: boolean) {
    this.visible = valor;
  }

  logColorSeleccionado(){
    console.log("color seleccionado : "+this.color_seleccionado);
  }
}
