import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();

    if(parametros?.extras.state){
    this.usuario = parametros?.extras.state['user'];
    this.contrasena = parametros?.extras.state['pass'];
  }
  }

  recuperar(){
    this.router.navigate(['cam-contrasena'],);
  }
}
