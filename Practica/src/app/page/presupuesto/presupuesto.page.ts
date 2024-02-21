import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/interface/gasto';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {
  public gastos: string[]=['Directos', 'Fijos', 'Variables'];
  public selectedValue:any;
  public monto:number=0;
  public resultados:string='';
  public errResultados:string='';
  public gastosList:Gasto[]=[];

  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.gastosList = this.presupuestoService.mostrarGastos();
  }
  cambioValor(value: any){
    console.log(value);
  }
  customPopoverOptions: any = {
    header: 'Seleccion de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null && this.monto>0){
      this.errResultados = 'Exito';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n';
      this.presupuestoService.agregarGasto(this.monto, this.selectedValue);
      this.gastosList = this.presupuestoService.mostrarGastos();
      this.limpiarCampos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  } 

  limpiarCampos(){
    this.monto =0;
    this.selectedValue =null;
  }
}
