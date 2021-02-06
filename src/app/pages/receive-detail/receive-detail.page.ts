import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastServiceService } from '../../services/toast-service.service';
@Component({
  selector: 'app-receive-detail',
  templateUrl: './receive-detail.page.html',
  styleUrls: ['./receive-detail.page.scss'],
})
export class ReceiveDetailPage implements OnInit {

  user : any;
  constructor(
    private router: Router,
    private params : ActivatedRoute,
    private toastServcice : ToastServiceService
  ) { }

  ngOnInit() {
    this.user = this.params.snapshot.paramMap['params'];
    console.log(this.user)
  }

  acceptPackage(){
    this.toastServcice.presentToast('Paquete recibido correctamente','success','botton')
    this.router.navigate(['complex']);
  }
}
