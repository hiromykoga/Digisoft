import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';

import { LoguinPrincipalComponent } from '../app/loguin/loguin-principal/loguin-principal.component';
import { HomePrincipalComponent } from '../app/home/home-principal/home-principal.component';
import { MenuPrincipalComponent } from './menu/menu-principal/menu-principal.component';

const routes: Routes = [
  {path:'',component:LoguinPrincipalComponent},
  {path:'loguin',component:LoguinPrincipalComponent},
  //en children se colocan los componentes que se desplegan en principal
  {path:'principal',component:HomePrincipalComponent,
    children:[
    ]
  }, 
  {path:'**',component:HomePrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
