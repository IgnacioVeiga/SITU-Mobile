import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio/inicio.page';
import { MiPerfilPage } from './pages/usuario/mi-perfil/mi-perfil.page';
import { IngresarPage } from './pages/usuario/ingresar/ingresar.page';
import { RegistrarsePage } from './pages/usuario/registrarse/registrarse.page';
import { HacerDenunciaPage } from './pages/hacer-denuncia/hacer-denuncia.page';
import { InfoPage } from './pages/info/info.page';
import { AyudaPage } from './pages/ayuda/ayuda.page';
import { HorariosPage } from './pages/horarios/horarios.page';
import { NoticiasAlertasPage } from './pages/noticias-alertas/noticias-alertas.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ingresar',
    pathMatch: 'full'
  },

  // todos
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'mi-perfil',
    component: MiPerfilPage
  },
  {
    path: 'ingresar',
    component: IngresarPage
  },

  // pasajero
  {
    path: 'registrarse',
    component: RegistrarsePage
  },
  {
    path: 'hacer-denuncia',
    component: HacerDenunciaPage
  },
  {
    path: 'info',
    component: InfoPage
  },
  {
    path: 'ayuda',
    component: AyudaPage
  },
  {
    path: 'noticias-alertas',
    component: NoticiasAlertasPage
  },
  {
    path: 'horarios',
    component: HorariosPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
