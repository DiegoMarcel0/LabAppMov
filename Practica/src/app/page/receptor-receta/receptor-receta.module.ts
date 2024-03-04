import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptorRecetaPageRoutingModule } from './receptor-receta-routing.module';

import { ReceptorRecetaPage } from './receptor-receta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptorRecetaPageRoutingModule
  ],
  declarations: [ReceptorRecetaPage]
})
export class ReceptorRecetaPageModule {}
