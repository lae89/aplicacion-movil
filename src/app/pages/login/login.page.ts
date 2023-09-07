import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  isAlertOpen = false;
  alertButtons = ['OK'];
  mensaje: string ='';

  constructor(private router: Router) { }

  ngOnInit() {
    var parametros = this.router.getCurrentNavigation();

  if(parametros?.extras.state){
    this.usuario = parametros?.extras.state['usuar'];
    this.contrasena = parametros?.extras.state['contra'];
  }
  }


  navegar() {
    if(this.mdl_usuario == '' && this.mdl_contrasena == ''){
      this.mensaje = 'Debe Ingresar Valores';
      this.isAlertOpen = true;
    } else {
    if(this.mdl_usuario == this.usuario && this.mdl_contrasena == this.contrasena){

      let parametros: NavigationExtras = {
        state: {
          user: this.mdl_usuario,
          pass: this.mdl_contrasena
        }
      }

    this.router.navigate(['inicio'], parametros);
    } else {
      this.mensaje = 'Credenciales Invalidas'
      this.isAlertOpen = true;
    }
  }
    
}

  user(){
    this.router.navigate(['crear-usuario']);
  }
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
