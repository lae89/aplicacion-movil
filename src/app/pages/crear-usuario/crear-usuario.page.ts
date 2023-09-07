import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];
  mensaje: string ='';

  ngOnInit() {
  }

  crear() {
    if(this.mdl_usuario == '' && this.mdl_contrasena == ''){
      this.mensaje = 'Debe Ingresar Valores';
      this.isAlertOpen = true;
    } else {
    if(this.mdl_usuario == this.mdl_usuario && this.mdl_contrasena == this.mdl_contrasena){

      var parametros: NavigationExtras = {
        state: {
          usuar: this.mdl_usuario,
          contra: this.mdl_contrasena
        }
      }

    this.router.navigate(['login'], parametros);
    } else {
      this.mensaje = 'Credenciales Invalidas'
      this.isAlertOpen = true;
    }
  }
    
}

setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
}
