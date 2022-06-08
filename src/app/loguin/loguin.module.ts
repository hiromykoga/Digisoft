import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoguinPrincipalComponent } from './loguin-principal/loguin-principal.component';

@NgModule({
  declarations: [
    LoguinPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports : [LoguinPrincipalComponent]
})
export class LoguinModule { }
