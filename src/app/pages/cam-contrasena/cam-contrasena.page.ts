import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cam-contrasena',
  templateUrl: './cam-contrasena.page.html',
  styleUrls: ['./cam-contrasena.page.scss'],
})
export class CamContrasenaPage implements OnInit {

  constructor(private router: Router) { }

  usuario: string = '';
  contrasena: string = '';
  nuevacontrasena: string = '';

  mdl_usuario: string = '';
  mdl_contrasena: string = '';
  mdl_nuevacontrasena: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];
  mensaje: string ='';

  ngOnInit() {
    var parametros = this.router.getCurrentNavigation();

  if(parametros?.extras.state){
    this.usuario = parametros?.extras.state['usuar'];
    this.contrasena = parametros?.extras.state['contra'];
  }
  }

  modificar() {
    if(this.mdl_usuario == '' && this.mdl_contrasena == '' && this.mdl_contrasena == '' && this.mdl_nuevacontrasena == ''){
      this.mensaje = 'Debe Ingresar Valores';
      this.isAlertOpen = true;
    } else {
    if(this.mdl_usuario == this.mdl_usuario && this.mdl_contrasena == this.mdl_contrasena){

      var parametros: NavigationExtras = {
        state: {
          usuar: this.mdl_usuario,
          contra: this.mdl_nuevacontrasena
        }
      }

    this.router.navigate(['login'], parametros);
    } else {
      this.mensaje = 'Credenciales Invalidas'
      this.isAlertOpen = true;
    }
  }
    
}
}
