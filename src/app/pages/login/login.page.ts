import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastServiceService } from '../../services/toast-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  password: string;
  code : string

  constructor(
    private router: Router,
    private toastService : ToastServiceService

  ) { }

  ngOnInit() {
  }

  changePassword(){
    this.router.navigate(['forgot-password']);
  }

  goToComplex(){
    if((this.user === undefined || this.password === undefined) || (this.user == '' || this.password =='') ){
      this.toastService.presentToast("Ingrese el usuario y contraseña","danger","botton")
    }else{
      localStorage.setItem('usuario','Martín Ferreira');
      this.toastService.presentToast("Usuario logueado correctamente","success","botton");
      this.router.navigate(['complex']);
    }
    
  }

  validateCode(){
    if(this.code === undefined || this.code === ''){
      this.toastService.presentToast("Ingrese un código valido","danger","botton")
    }else{
      localStorage.setItem('usuario','Martín Ferreira');
      this.toastService.presentToast("Usuario logueado correctamente","success","botton");
      this.router.navigate(['complex']);
    }
    
  }

}
