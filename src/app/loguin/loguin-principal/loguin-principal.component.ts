import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { ServicioLoguinService } from 'src/app/servicios/servicio-loguin.service';

@Component({
  selector: 'app-loguin-principal',
  templateUrl: './loguin-principal.component.html',
  styleUrls: ['./loguin-principal.component.css']
})
export class LoguinPrincipalComponent implements OnInit {

  formularioLoguin:FormGroup;
  constructor(private constFormulario:FormBuilder, private router:Router, private servicioLoguin:ServicioLoguinService) { 
    
    this.formularioLoguin = constFormulario.group({
      inputUser: ['',Validators.required],
      inputPassword: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  obtenerAcceso(){
    console.log("------------> obtenerAcceso");
    console.log("------------> usu Form "+this.formularioLoguin.controls['inputUser'].value);
    console.log("------------> Pwd Form "+this.formularioLoguin.controls['inputPassword'].value);
    //Descomentar estas lineas al momento de asociar el servicio backend en servicios loguin. Eliminar tambien la linea 34
    /*this.servicioLoguin.autorizacionLoguin(this.formularioLoguin.controls['inputUser'].value,this.formularioLoguin.controls['inputPassword'].value).subscribe(data => {
      this.router.navigate(['principal']);
    });*/  
    this.router.navigate(['principal']);
  }

}
