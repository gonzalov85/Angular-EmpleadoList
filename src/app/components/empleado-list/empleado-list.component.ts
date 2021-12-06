import { Empleado } from './../../models/Empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[]= [
    {legajo:1, nombre:"Juan", apellido:"Perez", sexo:"Masculino", salario: 25000},
    {legajo:2, nombre:"Carlos", apellido:"Gomez", sexo:"Masculino", salario: 35000},
    {legajo:3, nombre:"Sandra", apellido:"Juarez", sexo:"Femenino", salario: 40000},
    {legajo:4, nombre:"Diego", apellido:"Luna", sexo:"Masculino", salario: 41000},
    {legajo:5, nombre:"Monica", apellido:"Lewinsky", sexo:"Femenino", salario: 38000},
    {legajo:6, nombre:"Pepe", apellido:"Argento", sexo:"Masculino", salario: 60000}
  ];

  radioButtonSeleccionado = "Todos";

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === "Femenino").length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === "Masculino").length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect:string):void{
    this.radioButtonSeleccionado = radioButtonSelect;
  }

}
