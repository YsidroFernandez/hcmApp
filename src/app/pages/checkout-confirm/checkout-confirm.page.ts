import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.page.html',
  styleUrls: ['./checkout-confirm.page.scss'],
})
export class CheckoutConfirmPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  exit(){
    this.router.navigate(['complex-detail']);
  }
}
