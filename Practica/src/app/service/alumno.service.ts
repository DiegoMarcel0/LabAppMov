import { Injectable } from '@angular/core';
import { Alumno } from '../interface/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos:Alumno[]=[];
  constructor() { }
  public agregarAlumno(alumno:Alumno){
    if(this.alumnos.length>0){
      alumno.id=this.alumnos.length+1;
    }else {
      alumno.id
    }
    this.alumnos.push(alumno);
  }
  public borrarAlumno(id: number){
    this.alumnos =
    this.alumnos.filter((al=>al.id!=id));
  }
  public getAlumnos():Alumno[]{
    return this.alumnos;
  }
  public setAlumnos(alumno:Alumno[]){
    this.alumnos= alumno;
  }
  public actualizar(alumno:Alumno):Alumno[]{
    this.alumnos.filter(
      (al)=>al.id== alumno.id
    ).map(al=>{
      al.matricula=alumno.matricula;
      al.nombre=alumno.nombre;
    });
    return this.alumnos;
  }
}
