import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ingresar',
    pathMatch: 'full'
  },

  // todos,
  {
    path: 'inicio',
    loadChildren: './inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'mi-perfil',
    loadChildren: './pages/usuario/mi-perfil/mi-perfil.module#MiPerfilPageModule'
  },
  {
    path: 'ingresar',
    loadChildren: './pages/usuario/ingresar/ingresar.module#IngresarPageModule'
  },

  // pasajero
  {
    path: 'registrarse',
    loadChildren: './pages/usuario/registrarse/registrarse.module#RegistrarsePageModule'
  },
  {
    path: 'hacer-denuncia',
    loadChildren: './pages/hacer-denuncia/hacer-denuncia.module#HacerDenunciaPageModule'
  },
  {
    path: 'info',
    loadChildren: './pages/info/info.module#InfoPageModule'
  },
  {
    path: 'ayuda',
    loadChildren: './pages/ayuda/ayuda.module#AyudaPageModule'
  },
  {
    path: 'noticias-alertas',
    loadChildren: './pages/noticias-alertas/noticias-alertas.module#NoticiasAlertasPageModule'
  },
  {
    path: 'horarios',
    loadChildren: './pages/horarios/horarios.module#HorariosPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
