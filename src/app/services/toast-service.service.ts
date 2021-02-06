import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(
    private toastCtrl : ToastController
  ) { }

  async presentToast(sms,color, position) {
    const toast = await this.toastCtrl.create({
      message: sms,
      color: color,
      duration: 2000,
      position: position
    });
    toast.present();
  }

  async DismissToast() {
		return  await this.toastCtrl.dismiss();
  }
  
}
