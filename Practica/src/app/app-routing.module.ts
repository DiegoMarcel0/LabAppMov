import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./page/presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./page/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'receptor',
    loadChildren: () => import('./page/receptor/receptor.module').then( m => m.ReceptorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'receta',
    loadChildren: () => import('./page/receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'detalle-receta',
    loadChildren: () => import('./page/detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule)
  },
  {
    path: 'receptor-receta',
    loadChildren: () => import('./page/receptor-receta/receptor-receta.module').then( m => m.ReceptorRecetaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
