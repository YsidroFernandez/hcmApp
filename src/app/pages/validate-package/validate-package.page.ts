import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastServiceService } from '../../services/toast-service.service';

@Component({
  selector: 'app-validate-package',
  templateUrl: './validate-package.page.html',
  styleUrls: ['./validate-package.page.scss'],
})
export class ValidatePackagePage implements OnInit {

  constructor(
    private router : Router,
    private toastService : ToastServiceService
  ) { }

  ngOnInit() {
  }

  confirmPackage(){
    this.toastService.presentToast("Paquete entregado","success","botton");
    this.router.navigate(['complex']);
  }

}
