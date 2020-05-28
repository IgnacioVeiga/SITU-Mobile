import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/ingresar",
    pathMatch: "full",
  },

  // Disponible para todos,
  {
    path: "inicio",
    loadChildren: "./inicio/inicio.module#InicioPageModule",
  },
  {
    path: "mi-perfil",
    loadChildren:
      "./pages/usuario/mi-perfil/mi-perfil.module#MiPerfilPageModule",
  },
  {
    path: "ingresar",
    loadChildren: "./pages/usuario/ingresar/ingresar.module#IngresarPageModule",
  },

  // Solo para los pasajeros
  {
    path: "registrarse",
    loadChildren:
      "./pages/usuario/registrarse/registrarse.module#RegistrarsePageModule",
  },
  {
    path: "hacer-denuncia",
    loadChildren:
      "./pages/hacer-denuncia/hacer-denuncia.module#HacerDenunciaPageModule",
  },
  {
    path: "info",
    loadChildren: "./pages/info/info.module#InfoPageModule",
  },
  {
    path: "ayuda",
    loadChildren: "./pages/ayuda/ayuda.module#AyudaPageModule",
  },
  {
    path: "noticias-alertas",
    loadChildren:
      "./pages/noticias-alertas/noticias-alertas.module#NoticiasAlertasPageModule",
  },
  {
    path: "horarios",
    loadChildren: "./pages/horarios/horarios.module#HorariosPageModule",
  },

  // Solo para el chofer
  {
    path: "reporte-chofer",
    loadChildren:
      "./pages/reporte-chofer/reporte-chofer.module#ReporteChoferPageModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
