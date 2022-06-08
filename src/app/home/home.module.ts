import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    HomePrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    MenuModule
  ],
  exports : [HomePrincipalComponent]
})
export class HomeModule { }
